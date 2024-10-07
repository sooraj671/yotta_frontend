import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { editQuestion } from '../../services/questionsService';

const EditQuestionModal = ({ show, onHide, question, questionId }) => {
  const [editingQuestion, setEditingQuestion] = useState(question);

  const handleSubmitEdit = async () => {
    try {
      await editQuestion(questionId, editingQuestion, localStorage.getItem('username'));
      onHide();
    } catch (error) {
      console.error('Error editing question:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Your Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-group mb-3">
          <input
            type="textarea"
            className="form-control"
            placeholder="Edit your question"
            value={editingQuestion}
            onChange={(e) => setEditingQuestion(e.target.value)}
          />
        </div>
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
