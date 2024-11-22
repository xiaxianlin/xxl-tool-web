import { UserRole } from '@/constants/user';
import { useAppSelector } from '@/hooks/store';

const useAccess = (): Record<string, boolean> => {
  const { role } = useAppSelector((state) => state.user);

  return {
    admin: role === UserRole.Admin,
    manager: role === UserRole.Manager,
    user: role === UserRole.User,
    guest: role === UserRole.Guest,
  };
};

export default useAccess;
