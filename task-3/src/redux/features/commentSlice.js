import { createSlice } from '@reduxjs/toolkit';

const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

const commentSlice = createSlice({
  name: 'comments',
  initialState: storedComments,
  reducers: {
    addComment: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('comments', JSON.stringify(state)); // Save to local storage
    },
    deleteComment: (state, action) => {
      const commentIndex = state.findIndex(comment => comment === action.payload);
      if (commentIndex !== -1) {
        state.splice(commentIndex, 1);
        localStorage.setItem('comments', JSON.stringify(state)); // Update local storage
      }
    },
  },
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
