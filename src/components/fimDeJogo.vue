<template lang="html">
    <div class="podium">
        <h2>Parabéns!</h2>
        <p>{{ jogadorAtual.nick }}, você venceu o jogo em {{ jogadorAtual.rodadas }} rodadas.</p>
        <h3>Podium:</h3>
        <div
            v-for="(vencedor, index) in podium"
            :key="index"
            class=""
        >
            <p>{{index + 1}}° - {{ vencedor.nick }}: {{ vencedor.rodadas }} rodadas</p>
        </div>
        <button
            type="button"
            name="button"
            @click="reset"
        >
            Jogar novamente
        </button>
    </div>
</template>

<script>
export default {
    props: {
        vencedores: {
            type: Array,
            default: null,
        },
    },
    // created() {
    //     this.criaPodium();
    // },
    computed: {
        podium() {
            return [...this.vencedores].sort((a,b) => a.rodadas - b.rodadas).slice(0,3);
        },
        jogadorAtual() {
            return this.vencedores.slice(-1)[0];
        }
    },
    methods: {
        reset() {
            this.$emit('reiniciarJogo', this.valorCarta);
        },
        // criaPodium() {
        //     let ordenados = this.vencedores;
        //     console.log('ordenados', ordenados);
        //     this.jogadorAtual = ordenados.slice(-1)[0];
        //     console.log('Jogador', this.jogadorAtual);
        //     // algoritmo que ordena array pelas propertys dos objetos:
        //     // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
        //     ordenados.sort((a,b) => a.rodadas - b.rodadas);
        //     this.podium = ordenados.slice(0,3);
        // },
    }
}
</script>

<style lang="css" scoped>
    .podium {
        position: fixed;
        background-color: var(--cor-bg-secundaria);
        top:30%;
        left: 30%;
        padding: 25px;
        min-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--cor-texto);
        border-radius: 7px;
    }
</style>
