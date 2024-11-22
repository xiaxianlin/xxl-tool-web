import { UserRole } from '@/constants/user';

declare global {
  interface LoginData {
    username: string;
    password: string;
  }

  interface LoginResult {
    access_token: string;
  }

  interface UserAccount {
    uid: string;
    username: string;
    role: UserRole;
    createTime?: string;
    updateTime?: string;
  }
}

export {};
