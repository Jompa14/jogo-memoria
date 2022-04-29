import { createStore } from 'vuex'
import rodadas from './modules/rodadas'

// Create a new store instance.
export default createStore({
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
