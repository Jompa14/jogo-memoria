<template lang="html">
    <div class="podium">
        <h2>Parabéns!</h2>
        <p>{{ nick }}, você venceu o jogo em {{ rodadas }} rodadas.</p>
        <h3>Podium:</h3>
        <div
            v-for="(vencedor, index) in podium"
            :key="index"
        >
            <p>{{index + 1}}° - {{ vencedor.nick }}: {{ vencedor.rodadas }} rodadas</p>
        </div>
        <v-btn
            outlined
            color="var(--col-texto)"
            @click="reiniciarJogo"
        >
            Jogar novamente
        </v-btn>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                nick: "getNick",
                rodadas: "getRodadas",
                vencedores: "getVencedores",
            }),
            podium() {
                return [...this.vencedores].sort((a,b) => a.rodadas - b.rodadas).slice(0,3);
            },
        },
        methods: {
            ...mapMutations({
                resetRodadas: "resetRodadas"
            }),
            reiniciarJogo() {
                this.resetRodadas();
                this.$router.push('/')
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
    h3 {
        margin: 40px 0 20px 0;
    }
    p {
        margin: 10px 0
    }
    .v-btn {
        margin-top: 20px;
    }
</style>
