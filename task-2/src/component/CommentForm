/*Create Slices for the application
Create slices to handle the comments section
Each slice should have reducers that represent add, delete actions 
Dispatch the actions from your components to trigger state changes.

I applied this feature on the /features/commentSlice.js
*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== '') {
      dispatch({ type: 'ADD_COMMENT', payload: comment });
      setComment('');
    }
  };

  return (
    <div className="comment-form">
      <input
        type="text"
        placeholder="Your Name"
      />
      <textarea
        placeholder="Add a comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmitComment}>Submit Comment</button>
    </div>
  );
};

export default CommentForm;
