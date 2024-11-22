import { UserRole } from '@/constants/user';
import type { RouteObjectType } from '@/router/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AccountState extends UserAccount {
  loading: boolean;
  routes?: RouteObjectType[]; // 可选，用于从远程获取用户路由
}

const initialState: AccountState = {
  uid: '',
  username: '',
  role: UserRole.Guest,
  loading: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Partial<AccountState>>) => {
      return { ...state, ...action.payload };
    },
    reset: (state) => {
      return { ...state, ...initialState };
    },
  },
});

export const userActions = user.actions;

export default user.reducer;
