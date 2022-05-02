const state = () => ({
    vencedores: [],
})

const getters = {
    getVencedores: state => state.vencedores
}

const mutations = {
    addVencedor: (state, vencedor) => state.vencedores.push(vencedor)
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
}
