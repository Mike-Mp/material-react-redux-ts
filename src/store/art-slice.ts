import { createSlice } from '@reduxjs/toolkit';

const artInitialState = {
  isLoading: false,
};

const artSlice = createSlice({
  name: "art",
  initialState: artInitialState,
  reducers: {
    toggleLoading(state, _) {
      state.isLoading = !state.isLoading;
    },
  }
})

export const artReducer = artSlice.reducer;
export const artAction = artSlice.actions;

