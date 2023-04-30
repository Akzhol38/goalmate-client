import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
  const { data } = await axios.post('http://localhost:9088/api/v1/auth/signin', params);
  return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('http://localhost:9088/api/v1/auth/signup', params);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = 'error';
      state.data = null;
    },

    [fetchRegister.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.status = 'error';
      state.data = null;
    },
  },
});
export const selectIsAuth = (state) => Boolean(state.auth.data);
export const { logout } = authSlice.actions;
export default authSlice.reducer;
