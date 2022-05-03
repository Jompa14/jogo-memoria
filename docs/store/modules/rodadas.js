// initial state
const state = () => ({
  rodadas: 0
})

const getters = {
    getRodadas: state => state.rodadas
}

const mutations = {
    addRodada: state => state.rodadas++,
    resetRodadas: state => state.rodadas = 0
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
}
