const state = () => ({
    nick: null,
})

const getters = {
    getNick: state => state.nick
}

const mutations = {
    alteraNick(state, nick) {
        state.nick = nick
        localStorage.setItem('store', JSON.stringify(state.nick))
    },
    iniciaStore(state) {
		if(localStorage.getItem('store')) {
			state.nick = JSON.parse(localStorage.getItem('store'))
		}
	},
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
}
