import bannerUrl from '@/assets/images/sso.jpg';
import useStyles from '@/layouts/auth/styles';
import { Avatar, ConfigProvider, Layout, Typography } from 'antd';
import { useResponsive } from 'antd-style';
import type React from 'react';
import { Outlet } from 'react-router-dom';

const { Sider, Content, Header, Footer } = Layout;

const { Text } = Typography;

const AuthLayout: React.FC = () => {
  const { styles, theme } = useStyles();

  // 避免移动设备banner栏闪烁
  const { laptop: showBanner } = useResponsive();

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: theme.colorBgContainer,
            siderBg: theme.colorBgLayout,
            headerBg: 'transparent',
            footerBg: 'transparent',
          },
          Form: {
            verticalLabelPadding: 0,
          },
        },
      }}
    >
      <Layout className={styles.root} hasSider={showBanner}>
        <Layout>
          <Header className={styles.header}>
            <Avatar shape="square" src="/favicon.png" />
          </Header>
          <Content className={styles.content}>
            <div className={styles.container}>
              <Outlet />
            </div>
          </Content>
          <Footer className={styles.footer}>
            <Text type="secondary">
              © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}
            </Text>
          </Footer>
        </Layout>
        <Sider
          className={styles.sider}
          collapsedWidth={0}
          breakpoint="lg"
          width="33%"
          trigger={null}
        >
          <div
            style={{
              backgroundImage: `url(${bannerUrl})`,
            }}
          />
        </Sider>
      </Layout>
    </ConfigProvider>
  );
};

export default AuthLayout;
