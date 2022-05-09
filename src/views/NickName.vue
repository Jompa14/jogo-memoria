<template lang="html">
    <div
        class="nickname"
    >
        <div>
            <label for="nick">Nickname:</label>
            <v-text-field
                v-model="novoNick"
                autofocus
                dark
                color="var(--cor-texto)"
                @keyup.enter="alteraNick"
            />
        </div>
        <v-btn
            v-if="$vuetify.breakpoint.xs"
            outlined
            color="var(--cor-texto)"
            @click="alteraNick"
        >
            Jogar
        </v-btn>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data: () => ({
            novoNick: null,
        }),
        computed: {
            ...mapGetters({
                nick: 'getNick',
            })
        },
        methods: {
            alteraNick() {
                this.$store.commit('alteraNick', this.novoNick)
                this.$router.push('/')
            },
        },
    }
</script>

<style lang="scss" scoped>
    .nickname {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 50px;
        @media(max-width: 600px) {
            font-size: 30px;
        }
        .v-text-field {
            background-color: transparent;
            height: 50px;
            font-size: 30px;
            max-width: 300px;
            margin-left: 10px;
            @media(max-width: 600px) {
                height: 60px;
                font-size: 17px;
                max-width: 200px;
                margin-left: 0;
            }
        }
    }
</style>
