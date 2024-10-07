import React, { useState } from 'react';

const CommentInput = ({ onComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = () => {
    if (commentText.trim()) {
      onComment(commentText);
      setCommentText('');
    }
  };

  return (
    <div className="input-group mt-2">
      <input
        type="text"
        className="form-control"
        placeholder="Add a comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-primary" onClick={handleSubmit}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
