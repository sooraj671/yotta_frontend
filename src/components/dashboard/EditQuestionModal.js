import React, { useState, useEffect } from 'react';
import CustomModal from '../customModal';

const EditQuestionModal = ({ show, onHide, question, questionId, onSaveChanges }) => {
  const [editingQuestion, setEditingQuestion] = useState(question);
  const [error, setError] = useState(null);

  useEffect(() => {
    setEditingQuestion(question);
  }, [question]);

  const handleSubmitEdit = async () => {
    if (!editingQuestion) {
      setError('Question cannot be empty.');
      return; // Prevent submitting empty question
    }
    setError(null);

    try {
      console.log("updated question 2 : ", editingQuestion);
      // await editQuestion(questionId, editingQuestion, localStorage.getItem('username'));
      onSaveChanges(editingQuestion);

      // onHide(); // Close modal after successful edit
    } catch (error) {
      setError('Failed to edit the question. Please try again.');
      console.error('Error editing question:', error.message);
      // Optionally, you could show an error message to the user
    }
  };
  if(!show){
    return null;
  }
  return (
    // <Modal show={show} onHide={onHide}>
    //     <Modal.Header closeButton>
    //         <Modal.Title>Edit Your Question</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //     {error && <Alert variant="danger">{error}</Alert>}
    //         <textarea
    //             className="form-control"
    //             placeholder="Edit your question"
    //             value={editingQuestion}
    //             onChange={(e) => setEditingQuestion(e.target.value)}
    //             rows={3}
    //         />
    //     </Modal.Body>
    //     <Modal.Footer>
    //         <Button variant="secondary" onClick={onHide}>
    //             Cancel
    //         </Button>
    //         <Button
    //             variant="primary"
    //             onClick={handleSubmitEdit}
    //             disabled={!editingQuestion}
    //         >
    //             Save Changes
    //         </Button>
    //     </Modal.Footer>
    // </Modal>
 <CustomModal show={show} onHide={onHide} title="Edit Your Question">
      {error && <div className="alert alert-danger">{error}</div>}
      
      <textarea
        className="form-control"
        placeholder="Edit your question"
        value={editingQuestion}
        onChange={(e) => setEditingQuestion(e.target.value)}
        rows={3}
      />
      <div className="modal-footer">
        <button className="btn btn-secondary" onClick={onHide}>
          Cancel
        </button>
        <button
          className="btn btn-primary"
          onClick={handleSubmitEdit}
          disabled={!editingQuestion}
        >
          Save Changes
        </button>
      </div>
    </CustomModal>
);
};

export default EditQuestionModal;
