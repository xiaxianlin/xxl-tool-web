export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResult {
  access_token: string;
}

export interface LoginAccount {
  uid: string;
  username: string;
  role: string;
  createTime?: string;
  updateTime?: string;
}
