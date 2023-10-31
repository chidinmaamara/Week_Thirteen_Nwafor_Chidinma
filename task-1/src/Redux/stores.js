import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './Features/CommentSlice';

const store = configureStore({
  reducer: {
    comments: commentSlice,
  },
});

export default store;