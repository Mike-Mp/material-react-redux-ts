import { configureStore } from "@reduxjs/toolkit";

import { artReducer } from './art-slice';

const store = configureStore({ reducer: { art: artReducer } });

export default store;
