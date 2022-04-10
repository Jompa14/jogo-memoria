<template lang="html">
    <div
        class="flip-card"
        :class="{viraCarta: this.valorCarta.praCima}"
        @click="doAFlip()"
    >
        <div class="flip-card-inner">
            <div class="flip-card-back">
                <i>?</i>
            </div>
            <div class="flip-card-front">
                <p>{{valorCarta}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
		valorCarta: {
            type: Object,
			default: null,
		},
	},
    methods: {
        doAFlip() {
            // this.cartaParaCima = !this.cartaParaCima;
            this.$emit('fuiClicado', this.valorCarta);

        },
    }
}
</script>

<style lang="css" scoped>
    .flip-card {
        background-color: var(--cor-bg-principal);
        width: 150px;
        height: 200px;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
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

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--cor-bg-principal);
        color: var(--cor-texto);
        border: 1px solid var(--cor-texto);
        border-radius: 7px;
    }

    /* Style the back side */
    .flip-card-back {
        background-color: var(--cor-bg-principal);
        color: var(--cor-texto);
        transform: rotateY(180deg);
        border: 1px solid var(--cor-texto);
        border-radius: 7px;
    }
</style>
