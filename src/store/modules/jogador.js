const state = () => ({
    nick: null,

})

const getters = {
    getNick: state => state.nick
}

const mutations = {
    alteraNick: (state, novoNick) => state.nick = novoNick,
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
}
