import { searchUsers } from '@/apis/user';
import { useRequest } from 'ahooks';

export const useUserLogic = () => {
  const { data, loading } = useRequest(searchUsers);

  return {data, loading}
};
