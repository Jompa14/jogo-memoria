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
    initialiseStore(state) {
		// Check if the ID exists
		if(localStorage.getItem('store')) {
			// Replace the state object with the stored item
			this.replaceState(
				Object.assign(state, JSON.parse(localStorage.getItem('store')))
			);
		}
	},
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
}
