import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

import Cookie from 'js-cookie'

import { commonRoutes } from '@/mock/router'

Vue.use(VueRouter)

var router = new VueRouter({

})

//根据是否有cookie来判断是否进行初始化
if (Cookie.getJSON('accountData') && Cookie.getJSON('accountData').isLogin) {
  // 根据 cookie 设置用户登陆状态
  store.dispatch('StoreUser/setUser', Cookie.getJSON('accountData')).then(() => {
    let _roles = store.getters.userInfo.roles
    // 根据roles权限生成可访问的路由表
    store.dispatch('StoreAddRoutes/getRoutes', _roles).then(() => {
      // 动态添加可访问路由表
      router.addRoutes(store.getters.addRoutes)
    })
  })
} else {
  router.addRoutes([commonRoutes()])
}

router.beforeEach((to, from, next) => {
  // 从 cookie 判断是否登录
  if (Cookie.getJSON('accountData') && Cookie.getJSON('accountData').isLogin) {
    next();//当有用户权限的时候，说明当前用户可访问路由已生成
  } else if (to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router
