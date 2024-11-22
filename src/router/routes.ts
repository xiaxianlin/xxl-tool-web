// +---------------------------------
// | 本地路由表
// +---------------------------------

import type { RouteObjectType } from '@/router/types';

export const DEFAULT_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const SIGNUP_ROUTE = '/signup';

const routes: RouteObjectType[] = [
  {
    path: DEFAULT_ROUTE,
    key: 'root',
    name: 'Root',
    component: '/layouts',
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
  {
    key: 'exception',
    component: '/layouts/frame',
    hideInMenu: true,
    children: [
      {
        path: 'error',
        key: 'exception.error',
        component: '/pages/exception/500',
      },
      {
        path: 'forbidden',
        key: 'exception.forbidden',
        component: '/pages/exception/403',
      },
      {
        path: '*',
        key: 'exception.not-found',
        component: '/pages/exception/404',
      },
    ],
  },
];

export default routes;
