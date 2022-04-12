<template lang="html">
    <div class="podium">
        <h2>Parabéns!</h2>
        <!-- <p>{{vencedores[-1].nick}}, você venceu o jogo em {{vencedores[-1].rodadas}} rodadas</p> -->
        <h3>Podium:</h3>
        <div
            v-for="(vencedor, index) in vencedores"
            :key="index"
            class=""
        >
            <p>{{index + 1}}° - {{ vencedor.nick }}: {{vencedor.rodadas}} rodadas</p>
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
            type: Object,
            default: null,
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
        position: fixed;
        background-color: var(--cor-bg-secundaria);
        top:30%;
        left: 30%;
        padding: 25px;
        border: 2px solid var(--cor-texto);
        border-radius: 7px;
    }
</style>
