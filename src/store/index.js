import Vue from 'vue'
import Vuex from 'vuex'

import StoreUser from '@/store/user/user.js'
import StoreAddRoutes from '@/store/router/index.js'

Vue.use(Vuex)

var store = new Vuex.Store({
 modules:{
   StoreUser,
   StoreAddRoutes
 },
 getters:{
  userInfo: state => state.StoreUser,//账户信息
  addRoutes: state => state.StoreAddRoutes.addRoutes //动态路由表信息
 }
});

export default store