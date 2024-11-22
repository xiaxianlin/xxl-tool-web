export enum UserRole {
  Admin = 'admin',
  Manager = 'manager',
  User = 'user',
  Guest = 'guest',
}

export const UserRoleTitle: Record<UserRole, string> = {
  [UserRole.Admin]: '系统管理员',
  [UserRole.Manager]: '普通管理员',
  [UserRole.User]: '用户',
  [UserRole.Guest]: '访客',
};
