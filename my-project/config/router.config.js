export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', component: './diary/index', title: '日记' },
      { path: '/find', component: './find/index', title: '过客' },
      { path: '/mine', component: './mine/index', title: '我的' },
      { path: '/test', component: './test/index', title: '测试页面' },
      {
        path: '/exception',
        component: '../layouts/ExceptionLayout',
        routes: [
          { path: '/exception/403', title: '无权限', component: './exception/403' },
          { path: '/exception/500', title: '服务器出错了', component: './exception/500' },
        ],
      },
      { path: '/user', component: './user/index', title: '登录/注册' },
      { component: '404', title: '页面没找到' },
    ],
  },
];
