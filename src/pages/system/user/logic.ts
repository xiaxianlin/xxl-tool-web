import { addUser, deleteUser, modifyUser, modifyUserStatus, searchUsers } from '@/apis/user';
import { useSimpleTable } from '@/hooks/useSimpleTable';
import { useBoolean, useMemoizedFn, useRequest } from 'ahooks';
import { useMemo, useState } from 'react';
import { UserSearchParams } from './types';

export const useUserLogic = () => {
  const [user, setUser] = useState<UserAccount>();
  const [visible, { setTrue, setFalse: onHide }] = useBoolean(false);

  const table = useSimpleTable<UserAccount, UserSearchParams>(searchUsers);
  const onSuccess = () => table.refresh();

  const { runAsync: handleAddUser } = useRequest(addUser, { manual: true, onSuccess });
  const { runAsync: handleModifyUser } = useRequest(modifyUser, { manual: true, onSuccess });
  const { loading, run: changeStatus } = useRequest(modifyUserStatus, { manual: true, onSuccess });
  const { runAsync: handleDeleteUser } = useRequest(deleteUser, { manual: true, onSuccess });

  const initialValues = useMemo(() => (user ? { username: user?.username, role: user?.role } : undefined), [user]);

  const showForm = useMemoizedFn((user?: UserAccount) => {
    setTrue();
    setUser(user);
  });

  const onSubmit = useMemoizedFn(async (values: UserFormModel) => {
    if (user) {
      return handleModifyUser(user.uid, values);
    }
    return handleAddUser(values);
  });

  return {
    table,
    form: {
      visible,
      initialValues,
      onHide,
      onSubmit,
    },
    status: { loading, changeStatus },
    showForm,
    handleDeleteUser,
  };
};
