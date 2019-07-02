import Vue from 'vue'
import App from './App'

//引入表单验证插件
import VeeValidate, {Validator} from 'vee-validate'
//设置中文
import zh from 'vee-validate/dist/locale/zh_CN'
Validator.localize('zh_CN', zh)

import router from './router/index.js'
import store from './store/index.js'

// 引入 axios 
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VeeValidate)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})