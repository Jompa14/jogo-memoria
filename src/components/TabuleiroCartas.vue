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
                <div class="nickMaisBotao">
                    <p>{{nick}}</p>
                    <button
                        type="button"
                        name="button"
                        @click="dialogTrocaNick = true, bloqueiaTabuleiro('none')"
                    >
                        Trocar nick
                    </button>
                </div>
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
        <!-- dialog troca nick -->
        <div
            v-if="dialogTrocaNick"
            class="trocaNick"
        >
            <h3>Atenção!</h3>
            <p>Trocar o nickname irá interromper o progresso do jogo atual!</p>
            <div class="dialogBotoes">
                <button
                    type="button"
                    @click="dialogTrocaNick = false, bloqueiaTabuleiro('auto')"
                >
                    Cancelar
                </button>
                <button type="button" @click="trocarNick">Trocar Nick</button>
            </div>
        </div>
        <!-- dialog fim de jogo -->
        <fimDeJogo
            v-if="dialogFimDeJogo"
            :vencedores="vencedores"
            @reiniciarJogo="reiniciarJogo"
        />
    </div>
</template>

<script>
import CadaCarta from './CadaCarta.vue'
import fimDeJogo from './fimDeJogo.vue'
// esta const ajudará a compor nosso array cartas no hook created
const CARTAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default {
    components: {
        CadaCarta,
        fimDeJogo,
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
        dialogTrocaNick: false,
        dialogFimDeJogo: false,
        vencedores: [],
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
            let cartasParaCima = this.cartas.filter(carta => carta.praCima);
            if (cartasParaCima.length === 2) {
                this.contador += 1;
                if (cartasParaCima[0].conteudo === cartasParaCima[1].conteudo) {
                    this.bloqueiaTabuleiro("none");
                    cartasParaCima[0].match = true;
                    cartasParaCima[1].match = true;
                    cartasParaCima[0].praCima = false;
                    cartasParaCima[1].praCima = false;
                    setTimeout(() => {
                        this.isGameOver();
                        this.bloqueiaTabuleiro("auto");
                    }, 500);
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
        isGameOver() {
            let matchCartas = this.cartas.filter(carta => carta.match)
                if (matchCartas.length === 20) {
                    this.vencedores.push({nick: this.nick, rodadas: this.contador});
                    this.dialogFimDeJogo = true;
                    return
                }
        },
        bloqueiaTabuleiro(valor) {
            // valor "none" = bloqueia clique
            // valor "auto" = clique habilitado
            document.getElementById("tabuleiro").style.pointerEvents = valor;
        },
        trocarNick() {
            this.nick = '';
            this.dialogTrocaNick = false;
        },
        reiniciarJogo() {
            this.contador = 0;
            this.dialogFimDeJogo = false;
            this.cartas.map(carta => {
                carta.praCima = false;
                carta.match = false;
            })
            // embaralha cartas
            this.cartas.sort( () => .5 - Math.random() );
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
    .nickname input {
        background-color: transparent;
        height: 50px;
        font-size: 30px;
        color: var(--cor-texto);
        border-color: transparent;
        border-bottom-color: var(--cor-texto);
    }
    .nickname input:focus {
        outline: none;
    }
    .nickMaisBotao {
        display: flex;
    }
    .nickMaisBotao button {
        margin-left: 25px;
        padding: 0px;
        color: var(--cor-texto);
        background-color: transparent;
        border-color: transparent;
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
    .trocaNick {
        position: fixed;
        background-color: var(--cor-bg-secundaria);
        top:30%;
        left: 30%;
        padding: 25px;
        border: 2px solid var(--cor-texto);
        border-radius: 7px;
    }
    .trocaNick button {
        margin-right: 15px;
    }
</style>
