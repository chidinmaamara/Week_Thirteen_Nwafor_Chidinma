/*
  Implement reducers to handle state changes
  Create reducer functions that specify how comments can be added based on dispatched actions.
  Create reducer functions that specify how comments can be deleted based on dispatched actions
  Update the relevant parts of the state accordingly and return a new state object.
  Export your actions and reducer
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
