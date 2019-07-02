const LoginView = resolve => require(['@/pages/login/login.vue'], resolve);

export default {
    path: '/login',
    name: 'login',
    component: LoginView
};

// export default router;