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
        --cor-bg-principal: rgb(29, 4, 34);
        --cor-texto: rgb(254, 212, 62);
        background-color: var(--cor-bg-principal);
        color: var(--cor-texto);
    }
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
</style>
