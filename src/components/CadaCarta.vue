<template lang="html">
    <div
        class="flip-card"
        :class="{viraCarta: this.valorCarta.praCima || this.valorCarta.match }"
        @click="doAFlip()"
    >
        <div class="flip-card-inner">
            <div class="flip-card-back">
                <v-icon
                    color="rgb(193, 72, 203)"
                    size="40"
                > {{ mdiHelp }} </v-icon>
            </div>
            <div class="flip-card-front">
                <v-icon
                    color="var(--cor-texto)"
                    size="40"
                > {{ valorCarta.conteudo }} </v-icon>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mdiHelp,
} from '@mdi/js'
export default {
    props: {
		valorCarta: {
            type: Object,
			default: null,
		},
	},
    data: () => ({
        mdiHelp,
    }),
    methods: {
        doAFlip() {
            if (!this.valorCarta.praCima && !this.valorCarta.match) {
                this.$emit('fuiClicado', this.valorCarta);
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .flip-card {
        background-color: var(--cor-bg-principal);
        width: 100px;
        height: 100px;
        margin: 10px;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
        @media(max-width: 600px) {
            margin: 8px;
            height: 90px;
            width: 95px;
        }
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .viraCarta .flip-card-inner {
        transform: rotateY(180deg);
    }

    /* regras comuns entre front e back da carta */
    .flip-card-front, .flip-card-back {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 40px;
        background-color: var(--cor-bg-secundaria);
        border: 2px solid var(--cor-texto);
        border-radius: 7px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    /* Style the front side */
    .flip-card-front {
        transform: rotateY(180deg);
    }
</style>
