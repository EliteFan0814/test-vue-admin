<template>
  <div class="login-window">
    <form id="loginForm" name="loginForm" method="post" @submit.prevent="loginSubmit">
      <h1>登陆账号</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <label for="email">邮箱：</label>
            </td>
            <td>
              <input type="text" name="email" id="email" v-validate="'required|email'" placeholder="请输入邮箱" v-model="account" />
              <span v-show = "errors.has('email')">{{ errors.first('email') }}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">密码：</label>
            </td>
            <td>
              <input type="password" name="password" id="password" placeholder="密码随便写" v-model="password"
              />
            </td>
          </tr>
          <tr class="subTr">
            <td>admin 账户</td>
            <td>{{accountArray[0].account}}</td>
          </tr>
          <tr class="subTr">
            <td>normal 账户</td>
            <td>{{accountArray[1].account}}</td>
          </tr>
          <tr class="subTr">
            <td colspan="2">
              <button type="submit" :disabled="delayLoading" >{{ delayLoading ? '登陆中...' : '登录'}}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script type="text/javascript">
import userData from '@/mock/users.js'
// mock 拦截
import '@/api/login.js';

export default {
  name: 'login',
  data() {
    return {
      'delayLoading': false,
      'accountArray': userData,
      'account': '',
      'password': ''
    };
  },
  methods: {
    loginSubmit() {
      this.$validator.validate()
        .then(result => {
          if (result) {
            this.delayLoading = true
            let _data = {
              account: this.account,
              password: this.password
            };

            this.$http.post('/login', _data)
              .then((response) => {
                
                if (response.data.isLogin) {
                    this.$store.dispatch('StoreUser/setUser', response.data).then(() => {
                    let _roles = this.$store.getters.userInfo.roles;
                    this.$store.dispatch('StoreAddRoutes/getRoutes',_roles).then(() => {
                        // 根据roles权限生成可访问的路由表 动态添加可访问路由表
                        console.log(1)
                        console.log(this.$store.getters.addRoutes)
                        this.$router.addRoutes(this.$store.getters.addRoutes);
                        // 登陆成功后跳转到首页
                        this.$router.push('/')
                    })
                  })
                } else {
                  alert('登陆失败，填写 admin 或 normal 邮箱!')
                  this.delayLoading = false
                }
              });
          } else {
            alert('填写 admin 或 normal 邮箱!')
            return false
          }
        });
    }
  }
};

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.login-window {
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  border: 1px solid #aaa;
  border-radius: 10px;
  padding: 15px;
  /* height: 300px; */
}

form h1 {
  margin-bottom: 20px;
}
table {
  border-collapse: collapse;
}
table td {
  border: 1px solid #ccc;
  padding: 5px;
}
.subTr {
  text-align: center;
}
.subTr input,
.subTr button {
  padding: 5px;
  width: 100%;
  cursor: pointer;
}
</style>
