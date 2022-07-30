import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { artInitialStateType, artListType, notificationType } from '../types/index';

const artInitialState: artInitialStateType = {
  isLoading: false,
  artList: {
    artArray: [],
    config: null,
  },
  notification: null
};

const artSlice = createSlice({
  name: "art",
  initialState: artInitialState,
  reducers: {
    getData(state, action: PayloadAction<artListType>) {
      state.artList = action.payload;
      state.notification = null;
    },
    toggleLoading(state, _) {
      state.isLoading = !state.isLoading;
    },
    setNotification(state, action: PayloadAction<notificationType>) {
      state.notification = action.payload;
    }
  }
})

export const artReducer = artSlice.reducer;
export const artAction = artSlice.actions;

