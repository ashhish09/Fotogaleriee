import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './feature/searchslice.js';
import collectionslice from './feature/collectionSlice.js';

const store = configureStore({
  reducer: {
    search: searchReducer,
    collection:collectionslice
  },
});

export default store;
