const RoleView = resolve => require(['@/pages/role/role.vue'],resolve)

export default {
 path:'/role',
 name:'role',
 meta:{
  'cn':'管理权限'
 },
 component:RoleView
}