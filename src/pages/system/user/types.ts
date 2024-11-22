import { UserRole } from '@/constants/user';

export interface UserSearchParams {
  username?: string;
  role?: UserRole;
  status?: number;
}
