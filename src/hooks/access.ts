import { UserRole } from '@/constants/user';
import { useAppModel } from '@/models/app';

const useAccess = (): Record<string, boolean> => {
  const { user } = useAppModel();

  return {
    admin: user?.role === UserRole.Admin,
    manager: user?.role === UserRole.Manager,
    user: user?.role === UserRole.User,
    guest: user?.role === UserRole.Guest,
  };
};

export default useAccess;
