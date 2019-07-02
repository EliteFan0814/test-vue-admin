<template>
  <aside>
    <ul>
      <li v-for="(item,index) in treeList" :key="index">
        <router-link :to="{name:item.name}">
            {{item.meta.cn}}
        </router-link>
      </li>
    </ul>
    <div class="userInfo">
      <a @click.prevent="handleLogout">退出</a>
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
ul {
  list-style: none;
}
ul li,
.userInfo {
  color: #fff;
  margin: 5px;
  text-align: center;
}
ul li:hover,
.userInfo:hover {
  color: #555;
  background-color: #fff;
  cursor: pointer;
}
aside {
  position: fixed;
  border: 1px solid red;
  width: 100px;
  height: 100vh;
  background-color: #555;
}
.userInfo {
  position: absolute;
  bottom: 0;
}
</style>
