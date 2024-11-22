import App from '@/app';
import store from '@/stores';
import { StyleProvider } from 'antd-style';
import dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleProvider speedy prefix="css">
        <App />
      </StyleProvider>
    </Provider>
  </React.StrictMode>,
);
