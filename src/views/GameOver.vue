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
        // value: {
        //     type: Boolean,
        //     default: false,
        // },
    },
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
    }
}
</script>

<style lang="css" scoped>
    .podium {
        position: absolute;
        inset: 0px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 600px;
        max-height: none;
        padding: 25px;
        background-color: var(--cor-bg-secundaria);
        border: 2px solid var(--cor-texto);
        border-radius: 7px;
    }
</style>
