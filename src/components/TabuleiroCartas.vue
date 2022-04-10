<template lang="html">
    <div class="div-pai">
        <!-- <div class="d-flex" style="width: 80%"> -->
            <CadaCarta
                v-for="(carta, index) in cartas"
                :key="index"
                :valorCarta="carta"
                @fuiClicado="doAFlip"
            />
        <!-- </div> -->
    </div>
</template>

<script>
import CadaCarta from './CadaCarta.vue'
export default {
    components: {
        CadaCarta,
    },
    data: () => ({
        cartas: [
            {conteudo: 'A', praCima: false},
            {conteudo: 'A', praCima: false},
            {conteudo: 'B', praCima: false},
            {conteudo: 'B', praCima: false},
            {conteudo: 'C', praCima: false},
            {conteudo: 'C', praCima: false},
            {conteudo: 'D', praCima: false},
            {conteudo: 'D', praCima: false},
            {conteudo: 'E', praCima: false},
            {conteudo: 'E', praCima: false},
            {conteudo: 'F', praCima: false},
            {conteudo: 'F', praCima: false},
            {conteudo: 'G', praCima: false},
            {conteudo: 'G', praCima: false},
            {conteudo: 'H', praCima: false},
            {conteudo: 'H', praCima: false},
            {conteudo: 'I', praCima: false},
            {conteudo: 'I', praCima: false},
            {conteudo: 'J', praCima: false},
            {conteudo: 'J', praCima: false},
        ]
    }),
    methods: {
        doAFlip(carta) {
            console.log(arguments);
            carta.praCima = !carta.praCima;
            // this.$emit('fuiClicado');
        },
    }
}
</script>

<style lang="css" scoped>

</style>
