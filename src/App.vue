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
    * {
        background-color: rgb(29, 4, 34);
        color: rgb(254, 212, 62);
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
