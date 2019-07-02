// 登陆 组件路由
import LoginRouter from '@/pages/login/router.js'

// 中间 概况介绍 组件路由
import HomeRouter from '@/pages/home/router.js'

// 中间 管理员才能显示的 组件路由
import RoleRouter from '@/pages/role/router.js'

// 中间 内容 组件
const Container = resolve => require(['@/components/layout/layout'],resolve)
// 左侧 sidebar 组件
const SideBar = resolve => require(['@/components/layout/sidebar'],resolve)

// 登录界面
export function commonRoutes() {
    return LoginRouter;
}

// 登陆后
let layoutObj = {
    path: '/',
    name: 'layout',
    components: { 
      default: Container,
      sidebar: SideBar,
    },
    redirect: '/index',
    children: [
        HomeRouter
    ]
};

// 普通用户
export function normalRoues() {
    return [commonRoutes(),layoutObj]
}

// 管理员
export function adminRoutes() {
    layoutObj.children = layoutObj.children.concat([RoleRouter])
    return [commonRoutes(),layoutObj]
}