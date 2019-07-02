const getters = {
 'userInfo'   : state => state.StoreUser,//账户信息
 'addRoutes'  : state => state.StoreAddRoutes.addRoutes //动态路由表信息
};

export default getters;