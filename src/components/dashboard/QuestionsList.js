import React, { useEffect, useState } from 'react';
import { fetchQuestions, deleteQuestion, postComment } from '../../services/questionsService';
import EditQuestionModal from './EditQuestionModal';
import CommentInput from './CommentInput';

const QuestionsList = ({ loggedInUser, showOwnQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState('');
  const [editingQuestionId, setEditingQuestionId] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error(error);
      }
    };
    loadQuestions();
  }, []);

  const handleEditQuestion = (id, currentQuestion) => {
    setEditingQuestion(currentQuestion);
    setEditingQuestionId(id);
    setShowEditModal(true);
  };

  const handleDeleteQuestion = async (id) => {
    try {
      await deleteQuestion(id, loggedInUser);
      setQuestions(questions.filter(q => q._id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleComment = async (id, commentText) => {
    try {
      const updatedQuestion = await postComment(id, loggedInUser, commentText);
      setQuestions(questions.map(q => q._id === id ? { ...q, comments: updatedQuestion.comments } : q));
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const filteredQuestions = showOwnQuestions ? questions.filter(q => q.name === loggedInUser) : questions;

  return (
    <div className="questions-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {filteredQuestions.map((q) => (
        <div className="card mb-3 shadow-sm" key={q._id}>
          <div className="card-body">
            <h5 className="card-title">{q.question}</h5>
            <p className="card-text">By {q.name} on {new Date(q.createdAt).toLocaleString()}</p>
            {q.createdAt !== q.updatedAt && (
              <p className="card-text text-muted">Last updated at: {new Date(q.updatedAt).toLocaleString()}</p>
            )}
            {loggedInUser === q.name && (
              <>
                <button className="btn btn-sm btn-warning" onClick={() => handleEditQuestion(q._id, q.question)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger ml-2" onClick={() => handleDeleteQuestion(q._id)}>
                  Delete
                </button>
              </>
            )}
            <div className="comments-section mt-3">
              <h6>Comments</h6>
              {q.comments.map((c, idx) => (
                <p key={idx}><strong>{c.name}:</strong> {c.text}</p>
              ))}
              <CommentInput onComment={(text) => handleComment(q._id, text)} />
            </div>
          </div>
        </div>
      ))}
      {showEditModal && (
        <EditQuestionModal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          question={editingQuestion}
          questionId={editingQuestionId}
        />
      )}
    </div>
  );
};

export default QuestionsList;
