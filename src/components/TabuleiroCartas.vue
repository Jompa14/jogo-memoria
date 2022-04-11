<template lang="html">
    <div class="div-pai">
        <div class="tabuleiro">
            <CadaCarta
                v-for="(carta, index) in cartas"
                :key="index"
                :valorCarta="carta"
                @fuiClicado="viraAsCartinhas"
            />
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
    }),
    methods: {
        viraAsCartinhas(carta) {
            carta.praCima = !carta.praCima;
            let cartasParaCima = this.cartas.filter(carta => carta.praCima)
            if (cartasParaCima.length === 2) {
                if (cartasParaCima[0].conteudo === cartasParaCima[1].conteudo) {
                    cartasParaCima[0].match = true;
                    cartasParaCima[1].match = true;
                }
                setTimeout(() => {
                    cartasParaCima[0].praCima = false;
                    cartasParaCima[1].praCima = false;
                }, 1000);

            }
        },
    }
}
</script>

<style lang="css" scoped>
    .tabuleiro {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 190px;
    }

</style>
