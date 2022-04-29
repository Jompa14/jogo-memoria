import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            rodadas: 0
        }
    },
    mutations: {
        addRodada (state) {
            state.rodadas++
        }
    }
})
