<template>
    <div id="app">

        <TabuleiroCartas/>
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
        --cor-bg-principal: #1a1a1a;
        --cor-texto: #42b883;
        background-color: var(--cor-bg-principal);
        color: var(--cor-texto);
    }
</style>
