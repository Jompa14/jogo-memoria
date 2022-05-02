import Vue from 'vue'
import Vuex from "vuex";
import rodadas from './modules/rodadas'
import jogador from './modules/jogador'

Vue.use(Vuex);

// Create a new store instance.
export default new Vuex.Store({
    modules: {
        rodadas,
        jogador
    }
    // state () {
    //     return {
    //         rodadas: 0
    //     }
    // },
    // mutations: {
    //     addRodada (state) {
    //         state.rodadas++
    //     }
    // }
})
