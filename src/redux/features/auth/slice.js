import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginApi } from '../../../services/authApi';
import { clearToken, saveToken } from '../../../utils/secureStorage';

export const login = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await loginApi(payload);
      await saveToken(res.data.access);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Login Failed');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthedicated: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    logout: state => {
      state.isAuthedicated = false
      state.user = null
      clearToken()
    },
    updateToken(state, action) {
      if (state.user) {
        state.user.access = action.payload.access;
      }
    },
    restoreAuth: (state, action) => {
      state.isAuthedicated = true
      state.user = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthedicated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError,restoreAuth } = authSlice.actions;
export default authSlice.reducer;
