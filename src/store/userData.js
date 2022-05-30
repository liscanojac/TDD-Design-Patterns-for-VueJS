import axios from "axios";

const state = {
  user: undefined,
}

const getters = {
  getUser: (state) => state.user
}

const mutations = {
  updateUser: (state, user) => state.user = user
}

const actions = {
  login: async ({ commit }, { username, password }) => {
    const response = await axios.post('/login', {
      username,
      password
    })
    
    commit('updateUser', response.data)
  }
}

export const userData = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}