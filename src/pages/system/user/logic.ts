import { addUser, searchUsers } from '@/apis/user';
import { useSimpleTable } from '@/hooks/simple-table';
import { useRequest } from 'ahooks';
import { UserSearchParams } from './types';

export const useUserLogic = () => {
  const table = useSimpleTable<UserAccount, UserSearchParams>(searchUsers);

  const addUserService = useRequest(addUser, {
    manual: true,
    onSuccess: () => table.refresh(),
  });

  return { table, addUserService };
};
