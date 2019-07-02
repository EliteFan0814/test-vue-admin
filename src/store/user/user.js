import _ from 'lodash'
import Cookie from 'js-cookie'

const state = {
  isLogin: false
}

const mutations = {
  // 设置用户登录状态 存入 cookie
  SET_USER: function (state, userData) {
    state = _.assign(state, userData)
    Cookie.set('accountData', state)
  },
  // 移除登录状态 删除 cookie
  REMOVE_USER: function (state) {
    state = _.assign(state, {
      isLogin: false
    })
    Cookie.remove('accountData')
  }
}

const actions = {
  setUser: function ({ commit }, userData) {
    commit('SET_USER', userData)
  },
  removeUser: function ({ commit }) {
    commit('REMOVE_USER')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}