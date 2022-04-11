<template>
    <div id="app">
        <div class="container">
            <TabuleiroCartas/>
        </div>
    </div>
</template>

<script>
import TabuleiroCartas from './components/TabuleiroCartas.vue'

export default {
    name: 'App',
    components: {
        TabuleiroCartas,
    }
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
        min-width: 1000px;
        margin: 0 auto;
    }
</style>
