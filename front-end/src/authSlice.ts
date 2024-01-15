// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  user: { // Add a user property to store user information
    username: string;
    password: string;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export type RootState = {auth: AuthState;};

export default authSlice.reducer;