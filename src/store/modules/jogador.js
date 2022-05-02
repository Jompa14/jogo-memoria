const state = () => ({
    nick: null,

})

const getters = {
    getNick: state => state.nick
}

const mutations = {
    alteraNick: (state, nick) => state.nick = nick,
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
}
