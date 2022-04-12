<template lang="html">
    <div class="podium">
        <h2>Parabéns! Você venceu</h2>
        <h3>Podium</h3>
        <div
            v-for="(vencedor, index) in vencedores"
            class=""
        >
            <p>{{vencedor.index + 1}}° - {{ vencedor.nick }}: {{vencedor.rodadas}} rodadas</p>
        </div>
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
