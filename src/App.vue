<template>
    <div id="app">
        <div class="container">
            <router-view/>
            <!-- <TabuleiroCartas/>
            <GameOver/> -->
        </div>
    </div>
</template>

<script>
// import TabuleiroCartas from './views/TabuleiroCartas.vue'
// import GameOver from './views/GameOver.vue'

export default {
    name: 'App',
    // components: {
    //     TabuleiroCartas,
    //     GameOver,
    // }
}
</script>

<style>
/* esta é a unica tag script que nao eh scoped.  */
    :root{
        --cor-bg-principal: #494848;
        --cor-bg-secundaria: #1a1a1a;
        --cor-texto: #42b883;
        background-color: var(--cor-bg-principal);
        color: var(--cor-texto);
    }
    .container {
        max-width: 1000px;
        /* min-width: 1000px; */
        margin: 0 auto;
    }
</style>
