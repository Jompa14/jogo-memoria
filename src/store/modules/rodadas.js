// initial state
const state = () => ({
  rodadas: 0
})

const getters = {
    getRodadas: state => state.rodadas
}

const mutations = {
    addRodada: state => state.rodadas++
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
}
