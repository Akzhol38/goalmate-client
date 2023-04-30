import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const followingSlice = createSlice({
  name: 'followings',
  initialState,
  reducers: {
    setFollowingsData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const selectIsFollowing = (state) => Boolean(state.followings.data);
export const { setFollowingsData } = followingSlice.actions;
export const followingReducer = followingSlice.reducer;
