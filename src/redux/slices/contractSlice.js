import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contracts: {
    items: [],
    doneCon: [],
    status: 'loading',
  },
};

const contractSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    setContractData: (state, action) => {
      state.contracts.items = action.payload;
    },
    setContractDone: (state, action) => {
      state.contracts.doneCon = action.payload;
    },
  },
});

export const { setContractData, setContractDone } = contractSlice.actions;
export const contractReducer = contractSlice.reducer;
