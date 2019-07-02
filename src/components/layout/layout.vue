<template>
  <!-- 中间布局 -->
  <div class="main">
    <!-- 中间顶部导航条 -->
    <nav>
      <span>{{$route.meta.cn}}</span>
    </nav>
    <!-- 中间 中部主要内容 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "layout",
  data() {
    return {}
  }
};
</script>
<style scoped>
.main {
  margin: 0 200px;
  padding: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px 5px #ddd;
}
.main nav {
  padding-bottom: 5px;
  border-bottom: 2px solid #ddd;
}
</style>
