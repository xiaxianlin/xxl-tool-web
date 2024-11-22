import request from '@/apis';

/**
 * 获取用户列表
 */
export const searchUsers = async (params?: SearchParams): Promise<SearchResult<UserAccount>> => {
  const data = await request.get('/user/search', { params });
  return data.data;
};
