<template lang="html">
    <div class="div-pai">
        <div
            class="jogo"
        >
            <div class="painel">
                <div class="nickMaisBotao">
                    <p class="mb-0">Gamer: {{nick}}</p>
                    <v-btn
                        text
                        @click="dialogTrocaNick = true, bloqueiaTabuleiro('none')"
                    >
                        Trocar nick
                    </v-btn>
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
        <!-- dialog troca nick -->
        <div
            v-if="dialogTrocaNick"
            class="trocaNick"
        >
            <h3>Atenção!</h3>
            <p>Trocar o nickname irá interromper o progresso do jogo atual!</p>
            <div class="dialogBotoes">
                <v-btn
                    outlined
                    color="var(--cor-texto)"
                    @click="dialogTrocaNick = false, bloqueiaTabuleiro('auto')"
                >
                    Cancelar
                </v-btn>
                <v-btn
                    color="var(--cor-texto)"
                    @click="trocaNick"
                >
                    Trocar Nick
                </v-btn>
            </div>
        </div>
        <!-- dialog fim de jogo -->
        <!-- <fimDeJogo
            :vencedores="vencedores"
            @reiniciarJogo="reiniciarJogo"
        /> -->
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
    const CARTAS = [mdiAlienOutline, mdiSpaceInvaders, mdiZodiacSagittarius, mdiWeatherNight, mdiSpider,
     mdiYinYang, mdiWizardHat, mdiVirusOutline, mdiSkullCrossbonesOutline, mdiRadioactive];

    export default {
        components: {
            CadaCarta,
        },
        created() {
            this.nick === null ? this.$router.push('/NickName') :
            // aqui damos um loop na const CARTAS para preencher com um push
            // o array cartas (do compo data).
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
        mounted() {
            if (localStorage.nick) {
                this.nick = localStorage.nick;
            }
        },
        methods: {
            ...mapMutations({
                addRodada: "addRodada",
                resetRodadas: "resetRodadas",
                alteraNick: "alteraNick"
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
                        this.vencedores.push({nick: this.nick, rodadas: this.$store.state.rodadas});
                        this.$router.push('/gameover')
                        return
                    }
            },
            bloqueiaTabuleiro(valor) {
                // valor "none" = bloqueia clique
                // valor "auto" = clique habilitado
                document.getElementById("tabuleiro").style.pointerEvents = valor;
            },
            trocaNick() {
                this.dialogTrocaNick = false;
                this.$router.push('/NickName')
            },
        }
    }
</script>

<style lang="css" scoped>
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
    }
    .trocaNick {
        position: fixed;
        background-color: var(--cor-bg-secundaria);
        top:30%;
        left: 30%;
        padding: 25px;
        border: 2px solid var(--cor-texto);
        border-radius: 7px;
    }
    .trocaNick button {
        margin-right: 15px;
    }
</style>
