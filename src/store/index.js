import Vue from 'vue'
import Vuex from "vuex";
import rodadas from './modules/rodadas'

Vue.use(Vuex);

// Create a new store instance.
export default new Vuex.Store({
    modules: {
        rodadas,
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
