import { appendPending, removePending } from '@/apis/pending';
import { getToken } from '@/utils/token.ts';
import axios, { type AxiosResponse } from 'axios';
import { HttpResponse } from './types';

/**
 * 请求器
 */
const request = axios.create({
  baseURL: '/api',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    appendPending(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  <T extends HttpResponse>(response: AxiosResponse<T>): T => {
    removePending(response.config);

    if (response.data?.status !== 0) {
      throw response.data;
    }
    return response.data;
  },
  (error) => {
    if (error.config) {
      removePending(error.config);
    }
    return Promise.reject({ message: error.message });
  },
);

request.interceptors.response.use(
  <T>(response: T): T => response,
  (error) => Promise.reject(error),
);

export default request;