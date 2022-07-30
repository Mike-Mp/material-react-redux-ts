import { createSlice } from '@reduxjs/toolkit';

type artInitialStateType = {
  isLoading: boolean,
  artList: {
    artArray: Object[] | [],
    config: string,
  }
  notification: {
    type: string,
    title: string,
    description: string,
  } | null,
};

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
    getData(state, action) {
      const newArtList = {
        artArray: action.payload.data,
        config: action.payload.config.iiif_url,
      }
      state.artList = newArtList;
      state.notification = null;
    },
    toggleLoading(state, _) {
      state.isLoading = !state.isLoading;
    },
    setNotification(state, action) {
      state.notification = action.payload;
    }
  }
})

export const artReducer = artSlice.reducer;
export const artAction = artSlice.actions;

