import '@/assets/styles/global.css';
import PageLoading from '@/components/page-loading';
import NProgressBar from '@/components/progress-bar';
import theme from '@/config/theme';
import { GlobalStyles } from '@/global';
import { useAppSelector } from '@/hooks/store';
import { generateRoutes } from '@/router';
import asyncRoutes from '@/router/routes';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'antd-style';
import zhCN from 'antd/locale/zh_CN';
import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

interface AppToken {
  headerHeight: number; // 导航栏高度
}

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends AppToken {}
}

const App: React.FC = () => {
  const { themeMode } = useAppSelector((state) => state.app);

  // 构造路由
  const routes = useMemo(() => {
    return generateRoutes(asyncRoutes);
  }, []);

  const router = createBrowserRouter(routes);

  return (
    <ConfigProvider theme={theme} locale={zhCN}>
      <ThemeProvider<AppToken>
        themeMode={themeMode}
        customToken={{ headerHeight: 64 }}
        theme={() => ({ components: { Layout: { headerHeight: 64 } } })}
      >
        <GlobalStyles />
        <NProgressBar />
        <RouterProvider router={router} fallbackElement={<PageLoading />} />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
