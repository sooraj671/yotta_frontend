import React, { useState, useEffect } from 'react';
import CustomModal from '../customModal';

const PostQuestionModal = ({ show, onHide, onPostQuestion }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setNewQuestion(newQuestion);
  }, [newQuestion]);

  const handleSubmitPost = async () => {
    if (!newQuestion) {
      setError('Question cannot be empty.');
      return; // Prevent submitting empty newQuestion
    }
    setError(null);

    try {
      console.log("updated newQuestion 2 : ", newQuestion);
      //await postQuestion( _id: Math.random().toString(), newQuestion);
      onPostQuestion(newQuestion);

      // onHide(); // Close modal after successful edit
    } catch (error) {
      setError('Failed to edit the newQuestion. Please try again.');
      console.error('Error editing newQuestion:', error.message);
      // Optionally, you could show an error message to the user
    }
  };
  if(!show){
    return null;
  }
  return (
    <CustomModal show={show} onHide={onHide} title="Post a newQuestion">
    {error && <div className="alert alert-danger">{error}</div>}
    
    <textarea
      className="form-control"
      placeholder="Post a newQuestion"
      value={newQuestion}
      onChange={(e) => setNewQuestion(e.target.value)}
      rows={3}
    />
    <div className="modal-footer">
      <button className="btn btn-secondary" onClick={onHide}>
        Cancel
      </button>
      <button
        className="btn btn-primary"
        onClick={handleSubmitPost}
        disabled={!newQuestion}
      >
        Save Changes
      </button>
    </div>
  </CustomModal>
   
);
};

export default PostQuestionModal;
