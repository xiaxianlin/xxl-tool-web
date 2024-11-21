import request from '@/apis';
import { LoginAccount, LoginData, LoginResult } from '@/apis/auth/types';
import { HttpResponse } from '@/apis/types';

/**
 * 用户登录
 * @param data
 */
export function login(data: LoginData): Promise<HttpResponse<LoginResult>> {
  return request.post('/login', data);
}
export function check_login(
  data: LoginData,
): Promise<HttpResponse<LoginAccount>> {
  return request.post('/check_login', data);
}
