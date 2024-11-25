import { check_login } from '@/apis/auth';
import { getToken } from '@/utils/token';
import { useRequest } from 'ahooks';
import { ThemeMode } from 'antd-style';
import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useAppContainer = () => {
  const token = getToken();
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const { loading, data } = useRequest(check_login, {
    ready: !token,
  });
  
  return {
    themeMode,
    loading,
    user: data?.data,
    setThemeMode,
  };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
