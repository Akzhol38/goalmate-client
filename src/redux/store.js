import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import { contractReducer } from './slices/contractSlice.js';
import { followingReducer } from './slices/followingSlice.js';
export const store = configureStore({
  reducer: { auth: authReducer, contracts: contractReducer, followings: followingReducer },
});
