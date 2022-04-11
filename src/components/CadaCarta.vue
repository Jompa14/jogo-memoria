<template lang="html">
    <div
        class="flip-card"
        :class="{viraCarta: this.valorCarta.praCima || this.valorCarta.match }"
        @click="doAFlip()"
    >
        <div class="flip-card-inner">
            <div class="flip-card-back">
                <i>?</i>
            </div>
            <div class="flip-card-front">
                <p>{{valorCarta.conteudo}}</p>
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
            if (!this.valorCarta.praCima && !this.valorCarta.match) {
                this.$emit('fuiClicado', this.valorCarta);
            }
        },
    }
}
</script>

<style lang="css" scoped>
    .flip-card {
        background-color: var(--cor-bg-principal);
        width: 100px;
        height: 100px;
        margin: 10px;
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
    .flip-card-back {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 40px;
        color: rgb(193, 72, 203);  /*rosa pink*/
        background-color: var(--cor-bg-secundaria);
        border: 2px solid var(--cor-texto);
        border-radius: 7px;
    }

    /* Style the back side */
    .flip-card-front {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 40px;
        color: var(--cor-texto);
        background-color: var(--cor-bg-secundaria);
        transform: rotateY(180deg);
        border: 2px solid var(--cor-texto);
        border-radius: 7px;
    }
</style>
