import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './Features/commentSlice';

const store = configureStore({
  reducer: {
    comments: commentSlice,
  },
});

export default store;