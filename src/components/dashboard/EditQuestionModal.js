import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { editQuestion } from '../../services/questionsService';

const EditQuestionModal = ({ show, onHide, question, questionId }) => {
  const [editingQuestion, setEditingQuestion] = useState(question);

  const handleSubmitEdit = async () => {
    if (!editingQuestion) {
      return; // Prevent submitting empty question
    }

    try {
      await editQuestion(questionId, editingQuestion, localStorage.getItem('username'));
      onHide(); // Close modal after successful edit
    } catch (error) {
      console.error('Error editing question:', error);
      // Optionally, you could show an error message to the user
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Your Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <textarea
                className="form-control"
                placeholder="Edit your question"
                value={editingQuestion}
                onChange={(e) => setEditingQuestion(e.target.value)}
                rows={3}
            />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cancel
            </Button>
            <Button
                variant="primary"
                onClick={handleSubmitEdit}
                disabled={!editingQuestion}
            >
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
);
};

export default EditQuestionModal;
