import FullscreenButton from '@/components/header/fullscreen-button';
import useStyles from '@/components/header/styles';
import ThemeModeButton from '@/components/header/theme-mode-button';
import { Avatar, Col, Layout, Row, Space, Typography } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const Header: React.FC = () => {
  const { styles } = useStyles();
  return (
    <>
      <Layout.Header className={styles.ghost} />
      <Layout.Header className={styles.root}>
        <Row
          justify="space-between"
          align="middle"
          wrap={false}
          gutter={16}
          style={{
            fontSize: 0,
            lineHeight: 1,
            verticalAlign: 'middle',
            height: '100%',
          }}
        >
          <Col>
            <ThemeProvider themeMode="dark">
              <Space align="center">
                <Avatar shape="square" src="/favicon.png" />
                <Typography.Title
                  level={5}
                  style={{
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                  }}
                >
                  {import.meta.env.VITE_APP_NAME}
                </Typography.Title>
              </Space>
            </ThemeProvider>
          </Col>
          <Col>
            <Space align="center" size="middle">
              <ThemeModeButton />
              <FullscreenButton />
            </Space>
          </Col>
        </Row>
      </Layout.Header>
    </>
  );
};

export default Header;
