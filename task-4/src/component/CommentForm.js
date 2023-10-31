import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/features/commentSlice';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (name.trim() !== '' && comment.trim() !== '') {
      const newComment = `${name}: ${comment}`;
      dispatch(addComment(newComment));
      setName('');
      setComment('');
    }
  };

  return (
    <div className="comment-form">
      <h3>Write your Comment</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={handleNameChange}
      />
      <textarea
        placeholder="Add a comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmitComment}>Submit</button>
    </div>
  );
};

export default CommentForm;
