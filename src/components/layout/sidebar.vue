<template>
  <aside>
    <div class="userName"><span>用户名：{{$store.getters.userInfo.name}}</span></div>
    <ul>
      <li v-for="(item,index) in treeList" :key="index">
        <router-link :to="{name:item.name}" class="aLink">
            {{item.meta.cn}}
        </router-link>
      </li>
    </ul>
    <div class="userInfo">
      <div class="logOut"><a @click.prevent="handleLogout">退出登录</a></div>
    </div>
  </aside>
</template>
<script type='text/javascript'>
import "@/api/login.js"
import _ from "lodash"
export default {
  name: "sidebar",
  data() {
    return {
      treeList: []
    }
  },
  created() {
    let routesArry = this.$store.getters.addRoutes
    let layout = _.find(routesArry, { name: "layout" })
    let sideList = layout.children

    this.concatSideTree(sideList)
  },
  methods: {
    // 处理 登出操作
    handleLogout() {
      this.$http.get("/logout").then(() => {
        this.$store.dispatch("StoreUser/removeUser").then(() => {
          this.$router.push("/login")
        })
      })
    },
    concatSideTree(arry) {
      // _.forEach(array,(item) => {
      //   this.treeList.push(item)
      // })

      let _this = this
      _.forEach(arry, function(item) {
        _this.treeList.push(item)
      });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.aLink{
  display: block;
  color: #fff;
  text-decoration: none;
}
.aLink:hover {
  color: #000;
  background-color: #fff;
  cursor: pointer;
}
.userName{
  color: #fff;
  margin: 5px;
  text-align: center;
  padding-bottom: 5px; 
  border-bottom: 2px solid #fff;
}
ul {
  list-style: none;
}
ul li,
.userInfo {
  color: #fff;
  margin: 5px;
  text-align: center;
}
/* ul li a:hover{
  color: black;
} */
aside {
  position: fixed;
  border: 1px solid red;
  width: 180px;
  height: 100vh;
  background-color: #555;
}
.userInfo {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.userInfo .logOut{
  margin: 10px;
  cursor: pointer;
}
.userInfo .logOut:hover{
  background-color: aliceblue;
  color:black;
}
</style>
