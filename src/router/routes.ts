// +---------------------------------
// | 本地路由表
// +---------------------------------

export const DEFAULT_ROUTE = '/';
export const LOGIN_ROUTE = '/login';

const routes: RouteObjectType[] = [
  {
    path: DEFAULT_ROUTE,
    key: 'root',
    name: 'Root',
    component: '/layouts/page',
    children: [
      {
        key: 'index',
        index: true,
        name: '主页',
        fullPath: '/',
        icon: 'waterfall-flow-tones',
        component: '/pages/dashboard',
      },
      {
        key: 'system',
        type: 'group',
        name: '系统管理',
        path: 'system',
        children: [
          {
            key: 'system.user',
            name: '用户管理',
            fullPath: '/system/user',
            icon: 'contacts-tones',
            path: 'user',
            component: '/pages/system/user',
          },
        ],
      },
    ],
  },
  {
    key: 'auth',
    component: '/layouts/auth',
    hideInMenu: true,
    children: [
      {
        path: LOGIN_ROUTE,
        key: 'auth.login',
        component: '/pages/auth/login',
      },
    ],
  },
];

export default routes;
