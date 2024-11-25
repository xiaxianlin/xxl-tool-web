import Icon from '@/components/icon';
import { useAppModel } from '@/models/app';
import { Button, Tooltip } from 'antd';
import { ThemeProvider } from 'antd-style';
import type React from 'react';

const ThemeModeButton: React.FC = () => {
  const { themeMode, setThemeMode } = useAppModel();

  const onClick = () => {
    if (themeMode === 'dark') {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  };

  return (
    <ThemeProvider themeMode="dark">
      <Tooltip title={`Toggle ${themeMode === 'dark' ? 'light' : 'dark'} mode`}>
        <Button type="text" icon={<Icon name={themeMode === 'dark' ? 'sun' : 'moon'} />} onClick={onClick} />
      </Tooltip>
    </ThemeProvider>
  );
};

export default ThemeModeButton;
