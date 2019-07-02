const HomeView = resolve => require(['@/pages/home/home.vue'],resolve);

const router = {
 path:'/index',
 name:'index',
 meta:{
  cn:'公共显示'
 },
 component:HomeView
}

export default router
