<template lang="html">
    <div class="div-pai">
        <div
            v-if="nick === ''"
            class="nickname"
        >
            <label for="nick">Nickname:</label>
            <input
                v-model.lazy="nick"
                type="text"
                name="nick"
                value=""
            >
        </div>

        <div
            v-else
            class="jogo"
        >
            <div class="painel">
                <p>{{nick}}</p>
                <p>Rodadas: {{contador}}</p>
            </div>
            <div id="tabuleiro">
                <CadaCarta
                    v-for="(carta, index) in cartas"
                    :key="index"
                    :valorCarta="carta"
                    @fuiClicado="viraAsCartinhas"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CadaCarta from './CadaCarta.vue'
// esta const ajudará a compor nosso array cartas no hook created
const CARTAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default {
    components: {
        CadaCarta,
    },
    created() {
        // aqui damos um loop na const CARTAS para preencher com um push
        // o array cartas (do compo data).
        CARTAS.forEach((item) => {
            this.cartas.push({conteudo: item, praCima: false, match: false})
            this.cartas.push({conteudo: item, praCima: false, match: false})
        });
        //  abaixo "embaralhamos" nosso array. Segundo discuções, este algoritimo
        // não é VERDADEIRAMENTE randomico.
        // Porém, o mantive no codigo por ser elegante e cumprir seu singelo propósito
        this.cartas.sort( () => .5 - Math.random() );
    },
    data: () => ({
        cartas: [],
        contador: 0,
        nick: '',
    }),
    mounted() {
        if (localStorage.nick) {
            this.nick = localStorage.nick;
        }
    },
    watch: {
        nick(newNick) {
            localStorage.nick = newNick;
        }
    },
    methods: {
        viraAsCartinhas(carta) {
            carta.praCima = !carta.praCima;
            let cartasParaCima = this.cartas.filter(carta => carta.praCima)
            if (cartasParaCima.length === 2) {
                this.contador += 1;
                console.log(this.contador);
                if (cartasParaCima[0].conteudo === cartasParaCima[1].conteudo) {
                    this.bloqueiaTabuleiro("none");
                    cartasParaCima[0].match = true;
                    cartasParaCima[1].match = true;
                    cartasParaCima[0].praCima = false;
                    cartasParaCima[1].praCima = false;
                    setTimeout(() => {
                        this.bloqueiaTabuleiro("auto");
                    }, 1000);
                } else {
                    this.bloqueiaTabuleiro("none");
                    setTimeout(() => {
                        cartasParaCima[0].praCima = false;
                        cartasParaCima[1].praCima = false;
                        this.bloqueiaTabuleiro("auto");
                    }, 1000);
                }
            }
        },
        bloqueiaTabuleiro(valor) {
            // valor "none" = bloqueia clique
            // valor "auto" = clique habilitado
            document.getElementById("tabuleiro").style.pointerEvents = valor;
        }
    }
}
</script>

<style lang="css" scoped>
    .nickname {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        font-size: 50px;
    }
    .painel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 200px;
    }
    .painel p {
        font-size: 20px;
        font-weight: bold;
    }
    #tabuleiro {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 190px;
    }
</style>
