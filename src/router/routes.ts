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
        name: 'Home',
        fullPath: '/',
        hideInMenu: true,
        redirect: '/dashboards/blog',
      },
      {
        key: 'pages',
        type: 'group',
        name: 'Pages',
        // path: 'pages',
        children: [
          {
            name: 'Dashboards',
            key: 'pages.dashboards',
            icon: 'waterfall-flow-tones',
            path: 'dashboards',
            children: [
              {
                index: true,
                key: 'pages.dashboards.blog',
                name: 'Blog',
                path: 'blog',
                fullPath: '/dashboards/blog',
                component: '/pages/dashboards/blog',
                // access: 'pages.dashboards.blog',
              },
              {
                key: 'pages.dashboards.marketing',
                name: 'Marketing',
                path: 'marketing',
                fullPath: '/dashboards/marketing',
                component: '/pages/dashboards/marketing',
              },
              {
                key: 'pages.dashboards.ecommerce',
                name: 'Ecommerce',
                path: 'ecommerce',
                fullPath: '/dashboards/ecommerce',
                component: '/pages/temp',
              },
              {
                key: 'pages.dashboards.team',
                name: 'Team',
                path: 'team',
                fullPath: '/dashboards/team',
                component: '/pages/temp',
              },
              {
                key: 'pages.dashboards.project',
                name: 'Project',
                path: 'project',
                fullPath: '/dashboards/project',
                component: '/pages/temp',
              },
              {
                key: 'pages.dashboards.todo',
                name: 'Todo',
                path: 'todo',
                fullPath: '/dashboards/todo',
                component: '/pages/temp',
              },
              {
                key: 'pages.dashboards.crypto',
                name: 'Crypto',
                path: 'crypto',
                fullPath: '/dashboards/crypto',
                component: '/pages/temp',
              },
            ],
          },
          {
            name: 'Settings',
            key: 'pages.settings',
            icon: 'gear-2-tones',
            path: 'settings',
            children: [
              {
                key: 'pages.settings.account',
                name: 'Account',
                path: 'account',
                fullPath: '/settings/account',
                component: '/pages/settings/account',
              },
              {
                key: 'pages.settings.security',
                name: 'Security',
                path: 'security',
                fullPath: '/settings/security',
                component: '/pages/settings/security',
              },
              {
                key: 'pages.settings.store',
                name: 'Store',
                path: 'store',
                fullPath: '/settings/store',
                component: '/pages/settings/store',
              },
              {
                key: 'pages.settings.company',
                name: 'Company',
                path: 'company',
                fullPath: '/settings/company',
                component: '/pages/temp',
              },
              {
                key: 'pages.settings.billing',
                name: 'Billing',
                path: 'billing',
                fullPath: '/settings/billing',
                component: '/pages/temp',
              },
              {
                key: 'pages.settings.menus',
                name: 'Menus',
                path: 'menus',
                fullPath: '/settings/menus',
                component: '/pages/temp',
              },
              {
                key: 'pages.settings.notifications',
                name: 'Notifications',
                path: 'notifications',
                fullPath: '/settings/notifications',
                component: '/pages/temp',
              },
              {
                key: 'pages.settings.system',
                name: 'System',
                path: 'system',
                fullPath: '/settings/system',
                component: '/pages/temp',
              },
              {
                key: 'pages.settings.roles',
                name: 'Roles',
                path: 'roles',
                fullPath: '/settings/roles',
                component: '/pages/temp',
              },
              {
                key: 'pages.settings.permissions',
                name: 'Permissions',
                path: 'permissions',
                fullPath: '/settings/permissions',
                component: '/pages/temp',
              },
              {
                key: 'pages.settings.organization',
                name: 'Organization',
                path: 'organization',
                fullPath: '/settings/organization',
                component: '/pages/temp',
              },
            ],
          },
          {
            name: 'Profile',
            key: 'pages.profile',
            icon: 'contacts-tones',
            path: 'profile',
            children: [
              {
                key: 'pages.profile.user',
                name: 'User',
                path: 'user',
                fullPath: '/profile/user',
                component: '/pages/temp',
              },
              {
                key: 'pages.profile.article',
                name: 'Article',
                path: 'article',
                fullPath: '/profile/article',
                component: '/pages/temp',
              },
              {
                key: 'pages.profile.task',
                name: 'Task',
                path: 'task',
                fullPath: '/profile/task',
                component: '/pages/temp',
              },
              {
                key: 'pages.profile.order',
                name: 'Order',
                path: 'order',
                fullPath: '/profile/order',
                component: '/pages/temp',
              },
              {
                key: 'pages.profile.plan',
                name: 'Plan',
                path: 'plan',
                fullPath: '/profile/plan',
                component: '/pages/temp',
              },
            ],
          },
          {
            name: 'Authorisation',
            key: 'pages.authorisation',
            icon: 'shield-lock-tones',
            path: 'auth',
            children: [
              {
                key: 'pages.authorisation.login',
                name: 'Login',
                fullPath: '/login',
              },
              {
                key: 'pages.authorisation.signup',
                name: 'Signup',
                fullPath: '/signup',
              },
              {
                key: 'pages.authorisation.forgot-password',
                name: 'Forgot Password',
                fullPath: '/forgot-password',
              },
            ],
          },
          {
            name: 'Utility',
            key: 'pages.utility',
            icon: 'apps-tones',
            path: 'utility',
            children: [
              {
                key: 'pages.utility.integrations',
                name: 'Integrations',
                path: 'integrations',
                fullPath: '/utility/integrations',
                component: '/pages/utility/integrations',
              },
              {
                key: 'pages.utility.applications',
                name: 'Applications',
                path: 'applications',
                fullPath: '/utility/applications',
                component: '/pages/utility/applications',
              },
              {
                key: 'pages.utility.promotion',
                name: 'Promotion',
                path: 'promotion',
                fullPath: '/utility/promotion',
                component: '/pages/temp',
              },
              {
                key: 'pages.utility.documents',
                name: 'Documents',
                path: 'documents',
                fullPath: '/utility/documents',
                component: '/pages/temp',
              },
            ],
          },
        ],
      },
      {
        key: 'layouts',
        type: 'group',
        name: 'Layouts',
        // path: 'layouts',
        children: [
          {
            name: 'Table',
            key: 'layouts.table',
            icon: 'table-chart-2-tones',
            path: 'table',
            children: [
              {
                name: 'Basic',
                key: 'layouts.table.basic',
                path: 'basic',
                fullPath: '/table/basic',
                component: '/pages/table/basic',
              },
              {
                name: 'Query',
                key: 'layouts.table.query',
                path: 'query',
                fullPath: '/table/query',
                component: '/pages/table/query',
              },
              {
                name: 'View',
                key: 'layouts.table.view',
                path: 'view',
                fullPath: '/table/view',
                component: '/pages/table/view',
              },
              {
                name: 'Segment',
                key: 'layouts.table.segment',
                path: 'segment',
                fullPath: '/table/segment',
                component: '/pages/table/segment',
              },
            ],
          },
          {
            name: 'Form',
            key: 'layouts.form',
            icon: 'text-field-tones',
            path: 'form',
            children: [
              {
                name: 'Basic',
                key: 'layouts.form.basic',
                path: 'basic',
                fullPath: '/form/basic',
                component: '/pages/temp',
              },
              {
                name: 'Step',
                key: 'layouts.form.step',
                path: 'step',
                fullPath: '/form/step',
                component: '/pages/temp',
              },
              {
                name: 'Group',
                key: 'layouts.form.group',
                path: 'group',
                fullPath: '/form/group',
                component: '/pages/temp',
              },
              {
                name: 'Preview',
                key: 'layouts.form.preview',
                path: 'preview',
                fullPath: '/form/preview',
                component: '/pages/temp',
              },
              {
                name: 'Advanced',
                key: 'layouts.form.advanced',
                path: 'advanced',
                fullPath: '/form/advanced',
                component: '/pages/temp',
              },
            ],
          },
          {
            name: 'List',
            key: 'layouts.list',
            icon: 'list-view-tones',
            path: 'list',
            children: [
              {
                name: 'Pagination',
                key: 'layouts.list.pagination',
                path: 'pagination',
                fullPath: '/list/pagination',
                component: '/pages/temp',
              },
              {
                name: 'Infinite',
                key: 'layouts.list.infinite',
                path: 'infinite',
                fullPath: '/list/infinite',
                component: '/pages/temp',
              },
              {
                name: 'Draggable',
                key: 'layouts.list.draggable',
                path: 'draggable',
                fullPath: '/list/draggable',
                component: '/pages/temp',
              },
            ],
          },
          {
            name: 'Grid',
            key: 'layouts.grid',
            icon: 'grid-tones',
            path: 'grid',
            children: [
              {
                key: 'layouts.grid.card',
                name: 'Card',
                path: 'card',
                fullPath: '/grid/card',
                component: '/pages/grid/card',
              },
              {
                key: 'layouts.grid.list',
                name: 'List',
                path: 'list',
                fullPath: '/grid/list',
                component: '/pages/grid/list',
              },
              {
                key: 'layouts.grid.column',
                name: 'Column',
                path: 'column',
                fullPath: '/grid/column',
                component: '/pages/temp',
              },
              {
                key: 'layouts.grid.waterfall',
                name: 'Waterfall',
                path: 'waterfall',
                fullPath: '/grid/waterfall',
                component: '/pages/temp',
              },
            ],
          },
        ],
      },
      {
        key: 'apps',
        type: 'group',
        name: 'Apps',
        //path: 'apps',
        children: [
          {
            name: 'Ecommerce',
            key: 'apps.ecommerce',
            icon: 'cart-tones',
            path: 'ecommerce',
            children: [
              {
                key: 'apps.ecommerce.products',
                name: 'Products',
                path: 'products',
                fullPath: '/ecommerce/products',
                component: '/pages/ecommerce/products',
              },
              {
                key: 'apps.ecommerce.orders',
                name: 'Orders',
                path: 'orders',
                fullPath: '/ecommerce/orders',
                component: '/pages/ecommerce/orders',
              },
              {
                key: 'apps.ecommerce.customers',
                name: 'Customers',
                path: 'customers',
                fullPath: '/ecommerce/customers',
                component: '/pages/ecommerce/customers',
              },
              {
                key: 'apps.ecommerce.shops',
                name: 'Shops',
                path: 'shops',
                fullPath: '/ecommerce/shops',
                component: '/pages/ecommerce/shops',
              },
              {
                key: 'apps.ecommerce.checkout',
                name: 'Checkout',
                path: 'checkout',
                fullPath: '/ecommerce/checkout',
                component: '/pages/ecommerce/checkout',
              },
            ],
          },
          {
            name: 'Email',
            key: 'apps.email',
            icon: 'mail-tones',
            path: 'email',
            fullPath: '/email',
          },
          {
            name: 'Chat',
            key: 'apps.chat',
            icon: 'message-circle-2-tones',
            path: 'chat',
            fullPath: '/chat',
          },
          {
            name: 'Projects',
            key: 'apps.projects',
            icon: 'box-tones',
            path: 'projects',
            fullPath: '/projects',
          },
          {
            name: 'Tasks',
            key: 'apps.tasks',
            icon: 'document-check-tones',
            path: 'tasks',
            fullPath: '/tasks',
          },
          {
            name: 'Crypto',
            key: 'apps.crypto',
            icon: 'wallet-tones',
            path: 'crypto',
            fullPath: '/crypto',
          },
          {
            name: 'Invoices',
            key: 'apps.invoices',
            icon: 'seal-tones',
            path: 'invoices',
            fullPath: '/invoices',
          },
          {
            name: 'Medias',
            key: 'apps.medias',
            icon: 'file-box-tones',
            path: 'medias',
            fullPath: '/medias',
          },
        ],
      },
      {
        key: 'components',
        type: 'group',
        name: 'Components',
        //path: 'components',
        children: [
          {
            name: 'Charts',
            key: 'components.charts',
            icon: 'ranking-tones',
            path: 'charts',
            component: '/pages/charts',
            children: [
              {
                key: 'components.charts.antv',
                name: 'AntV',
                path: 'antv',
                fullPath: '/charts/antv',
                component: '/pages/charts/antv',
              },
              {
                key: 'components.charts.recharts',
                name: 'Recharts',
                path: 'recharts',
                fullPath: '/charts/recharts',
                component: '/pages/charts/recharts',
              },
              {
                key: 'components.charts.echarts',
                name: 'Echarts',
                path: 'echarts',
                fullPath: '/charts/echarts',
                component: '/pages/charts/echarts',
              },
              {
                key: 'components.charts.apexcharts',
                name: 'ApexCharts',
                path: 'apexcharts',
                fullPath: '/charts/apexcharts',
                component: '/pages/charts/apexcharts',
              },
            ],
          },
          {
            name: 'Icons',
            key: 'components.icons',
            icon: 'apps-3-tones',
            path: 'icons',
            component: '/pages/icons',
            children: [
              {
                key: 'components.icons.local',
                name: 'Local',
                path: 'local',
                fullPath: '/icons/local',
                component: '/pages/icons/local',
              },
              {
                key: 'components.icons.package',
                name: 'Package',
                path: 'package',
                fullPath: '/icons/package',
                component: '/pages/icons/package',
              },
              {
                key: 'components.icons.remote',
                name: 'Remote',
                path: 'remote',
                fullPath: '/icons/remote',
                component: '/pages/icons/remote',
              },
            ],
          },
          {
            name: 'Editors',
            key: 'components.editors',
            icon: 'pen-tones',
            path: 'editors',
            children: [
              {
                key: 'components.editors.cms',
                name: 'CMS',
                path: 'cms',
                fullPath: '/editors/cms',
                component: '/pages/editors/cms',
              },
              {
                key: 'components.editors.page',
                name: 'Page',
                path: 'page',
                fullPath: '/editors/page',
                component: '/pages/editors/page',
              },
              {
                key: 'components.editors.flow',
                name: 'Flow',
                path: 'flow',
                fullPath: '/editors/flow',
                component: '/pages/editors/flow',
              },
              {
                key: 'components.editors.code',
                name: 'Code',
                path: 'code',
                fullPath: '/editors/code',
                component: '/pages/editors/code',
              },
            ],
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
      {
        path: SIGNUP_ROUTE,
        key: 'auth.signup',
        component: '/pages/auth/signup',
      },
      {
        path: '/forgot-password',
        key: 'auth.forgot-password',
        component: '/pages/auth/forgot-password',
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