import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from '../features/Tweet/tweetSlice'
export const store = configureStore({
  reducer: {
    tweet:tweetReducer
  },
});
