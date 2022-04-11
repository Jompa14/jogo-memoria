<template lang="html">
    <div class="div-pai">
        <div class="tabuleiro">
            <CadaCarta
                v-for="(carta, index) in cartas"
                :key="index"
                :valorCarta="carta"
                @fuiClicado="doAFlip"
            />
        </div>
    </div>
</template>

<script>
import CadaCarta from './CadaCarta.vue'

const CARTAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default {
    components: {
        CadaCarta,
    },
    created() {
        CARTAS.forEach((item) => {
            this.cartas.push({conteudo: item, praCima: false, match: false})
            this.cartas.push({conteudo: item, praCima: false, match: false})
        });
        this.cartas.sort( () => .5 - Math.random() );
    },
    data: () => ({
        cartas: [],
    }),
    methods: {
        doAFlip(carta) {
            console.log(arguments);
            carta.praCima = !carta.praCima;
            let cartasParaCima = this.cartas.filter(carta => carta.praCima)
            if (cartasParaCima.length === 2) {
                if (cartasParaCima[0].conteudo === cartasParaCima[1].conteudo) {
                    cartasParaCima[0].match = true
                    cartasParaCima[1].match = true
                }
                cartasParaCima[0].praCima = false
                cartasParaCima[1].praCima = false
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
