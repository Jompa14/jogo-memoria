<template lang="html">
    <div
        class="nickname"
    >
        <label for="nick">Nickname:</label>
        <v-text-field
            autofocus
            dark
            color="var(--cor-texto)"
            :value="nick"
            @keyup.enter="alteraNick"
        />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                nick: 'getNick',
            })
        },
        methods: {
            alteraNick(evento) {
                this.$store.commit('alteraNick', evento.target.value)
                this.$router.push('/')
            },
        },
    }
</script>

<style lang="scss" scoped>
    .nickname {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 50px;
        @media(max-width: 600px) {
            font-size: 20px;
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
            }
        }
    }
</style>
