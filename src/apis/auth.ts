import request from '@/apis/core/http';

/**
 * 用户登录
 * @param data
 */
export function login(data: LoginData): Promise<HttpResponse<LoginResult>> {
  return request.post('/login', data);
}

export function check_login(data: LoginData): Promise<HttpResponse<UserAccount>> {
  return request.post('/check_login', data);
}
