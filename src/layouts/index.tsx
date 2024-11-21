import { check_login } from '@/apis/auth';
import Header from '@/components/header';
import LayoutLoading from '@/components/layout-loading';
import Sidebar from '@/components/sidebar';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { LOGIN_ROUTE } from '@/router/routes';
import { userActions } from '@/stores/slices/user';
import { useRequest } from 'ahooks';
import { Layout } from 'antd';
import React from 'react';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';

const ProLayout: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  // 请求用户数据
  useRequest(check_login, {
    onBefore: () => {
      dispatch(userActions.update({ loading: true }));
    },
    onSuccess: (data) => {
      console.log(data);
      dispatch(userActions.update({ ...data.data, loading: false }));
    },
    onError: () => {
      navigate(LOGIN_ROUTE);
    },
  });

  // 加载状态
  if (loading) return <LayoutLoading />;

  return (
    <>
      <ScrollRestoration />
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout hasSider>
          <Sidebar />
          <Layout.Content style={{ padding: 32 }}>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default ProLayout;
