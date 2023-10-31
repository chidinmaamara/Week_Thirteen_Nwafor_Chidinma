// CommentList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment } from '../redux/features/commentSlice';

const CommentList = () => {
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [editingComment, setEditingComment] = useState('');
  const [editedComment, setEditedComment] = useState('');

  const handleEditClick = (comment) => {
    setEditingComment(comment);
    setEditedComment(comment);
  };

  const handleEditSave = () => {
    setEditingComment('');
  };

  const handleEditCancel = () => {
    setEditingComment('');
  };

  const handleDeleteComment = (comment) => {
    dispatch(deleteComment(comment));
  };

  return (
    <div className="comment-list">
      <h2>All Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {editingComment === comment ? (
              <div>
                <input
                  type="text"
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                />
                <button onClick={handleEditSave}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
              </div>
            ) : (
              <div>
                {comment}
                <button onClick={() => handleEditClick(comment)}>Edit</button>
                <button onClick={() => handleDeleteComment(comment)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
