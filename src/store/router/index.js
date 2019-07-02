import _ from 'lodash'

import {adminRoutes,normalRoues} from '@/mock/router'

const state = {
    // 初始化 要加入的 权限路由
    addRoutes: []
};

const mutations = {
    // 设置 路由表
    SET_ROUTERS:function(state,adds){
        state.addRoutes.length = 0
        state.addRoutes = _.concat(state.addRoutes,adds)
    }
};

const actions = {
    // commit 设置路由表 并 获取路由表
    getRoutes:function({commit},roles){
        if (_.indexOf(roles, 'admin') !== -1) {
            commit('SET_ROUTERS',adminRoutes())
        } else {
            commit('SET_ROUTERS',normalRoues())
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}