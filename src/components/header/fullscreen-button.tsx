import Icon from '@/components/icon';
import { useFullscreen } from 'ahooks';
import { Button, Tooltip } from 'antd';
import { ThemeProvider } from 'antd-style';
import React from 'react';

const FullscreenButton: React.FC = () => {
  const [isFullscreen, { toggleFullscreen, isEnabled }] = useFullscreen(() =>
    document.querySelector('body'),
  );

  // 不支持全屏
  if (!isEnabled) return null;

  return (
    <ThemeProvider themeMode="dark">
      <Tooltip title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}>
        <Button
          type="text"
          icon={<Icon name={isFullscreen ? 'minimize' : 'maximize'} />}
          onClick={toggleFullscreen}
        />
      </Tooltip>
    </ThemeProvider>
  );
};

export default FullscreenButton;
