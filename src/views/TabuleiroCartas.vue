<template lang="html">
    <div class="div-pai">
        <div
            class="jogo"
        >
            <div class="painel">
                <div class="nickMaisBotao">
                    <p class="mb-0">Gamer: {{nick}}</p>
                    <div
                        v-if="!$vuetify.breakpoint.xs"
                        class="btnTrocaNick"
                        @click="$router.push('/NickName')"
                    >
                        Trocar nick
                    </div>
                </div>
                <p>Rodadas: {{rodadas}}</p>
            </div>
            <div id="tabuleiro">
                <CadaCarta
                    v-for="(carta, index) in cartas"
                    :key="index"
                    :valorCarta="carta"
                    @fuiClicado="viraAsCartinhas"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mdiAlienOutline,
        mdiSpaceInvaders,
        mdiZodiacSagittarius,
        mdiWeatherNight,
        mdiSpider,
        mdiYinYang,
        mdiYoutubeGaming,
        mdiWizardHat,
        mdiVirusOutline,
        mdiSkullCrossbonesOutline,
        mdiRadioactive,
    } from '@mdi/js'
    import CadaCarta from '../components/CadaCarta.vue'
    import { mapMutations, mapGetters } from 'vuex'
    // esta const ajudará a compor nosso array cartas no hook created
    const CARTAS = [mdiAlienOutline, mdiRadioactive, mdiZodiacSagittarius, mdiWeatherNight, mdiSpider,
    mdiYinYang, mdiWizardHat, mdiVirusOutline, mdiSkullCrossbonesOutline, mdiSpaceInvaders];

    export default {
        components: {
            CadaCarta,
        },
        beforeCreate() {
            if (!localStorage.getItem('store')) {
                this.$router.push('/NickName')
            }
        },
        created() {
            this.$store.commit('iniciaStore')
            //reduz numero de cartas no mobile para melhor ux
            if (this.$vuetify.breakpoint.xs) {
                CARTAS.pop()
            }
            // aqui damos um loop na const CARTAS para preencher com um push
            // o array cartas (do compo data)
            CARTAS.forEach((item) => {
                this.cartas.push({conteudo: item, praCima: false, match: false})
                this.cartas.push({conteudo: item, praCima: false, match: false})
            });
            //  abaixo "embaralhamos" nosso array. Segundo discuções, este algoritimo
            // não é VERDADEIRAMENTE randomico.
            // Porém, o mantive no codigo por ser elegante e cumprir seu singelo propósito
            this.cartas.sort( () => .5 - Math.random() );
        },
        computed: {
            ...mapGetters({
                rodadas: "getRodadas",
                nick: "getNick",
                iniciaStore: 'iniciaStore',
            })
        },
        data: () => ({
            mdiAlienOutline,
            mdiSpaceInvaders,
            mdiZodiacSagittarius,
            mdiWeatherNight,
            mdiYinYang,
            mdiYoutubeGaming,
            mdiWizardHat,
            mdiVirusOutline,
            mdiSkullCrossbonesOutline,
            mdiRadioactive,
            cartas: [],
            vencedores: [],
        }),
        methods: {
            ...mapMutations({
                addRodada: "addRodada",
                addVencedor: "addVencedor",
                alteraNick: "alteraNick",
            }),
            viraAsCartinhas(carta) {
                carta.praCima = !carta.praCima;
                let cartasParaCima = this.cartas.filter(carta => carta.praCima);
                if (cartasParaCima.length === 2) {
                    this.addRodada();
                    if (cartasParaCima[0].conteudo === cartasParaCima[1].conteudo) {
                        this.bloqueiaTabuleiro("none");
                        cartasParaCima[0].match = true;
                        cartasParaCima[1].match = true;
                        cartasParaCima[0].praCima = false;
                        cartasParaCima[1].praCima = false;
                        setTimeout(() => {
                            this.isGameOver();
                            this.bloqueiaTabuleiro("auto");
                        }, 500);
                    } else {
                        this.bloqueiaTabuleiro("none");
                        setTimeout(() => {
                            cartasParaCima[0].praCima = false;
                            cartasParaCima[1].praCima = false;
                            this.bloqueiaTabuleiro("auto");
                        }, 1000);
                    }
                }
            },
            isGameOver() {
                let matchCartas = this.cartas.filter(carta => carta.match)
                    if (matchCartas.length === 20) {
                        this.addVencedor({nick: this.nick, rodadas: this.rodadas});
                        this.$router.push('/gameover')
                        return
                    }
            },
            bloqueiaTabuleiro(valor) {
                // valor "none" = bloqueia clique
                // valor "auto" = clique habilitado
                document.getElementById("tabuleiro").style.pointerEvents = valor;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .div-pai{ margin-top: 50px;}
    .nickMaisBotao {
        display: flex;
        align-items: center;
    }
    .nickMaisBotao button {
        margin-left: 25px;
        padding: 0px;
        color: var(--cor-texto);
        background-color: transparent;
        border-color: transparent;
    }
    .painel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 200px;
        @media(max-width: 900px) {
            margin: 0 20px;
            margin-bottom: 20px;
        }
    }
    .painel p {
        font-size: 20px;
        font-weight: bold;
    }
    #tabuleiro {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 190px;
        @media(max-width: 900px) {
            margin: 0 10px;
        }
    }
    .btnTrocaNick {
        margin-left: 40px;
        cursor: pointer;
    }
</style>
