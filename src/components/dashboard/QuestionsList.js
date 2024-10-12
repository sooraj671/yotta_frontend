import React, { useEffect, useState } from 'react';
import { fetchQuestions, deleteQuestion, postComment, editQuestion, postQuestion  } from '../../services/questionsService';
import EditQuestionModal from './EditQuestionModal';
import PostQuestionModal from './PostQuestionModal';
import CommentInput from './CommentInput';

const QuestionsList = ({ loggedInUser }) => {
  const [questions, setQuestions] = useState([]);
  //const [question, setQuestion] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState('');
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [showOwnQuestions, setShowOwnQuestions] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    loadQuestions();
  }, []);

  const handleEditQuestion = (id, currentQuestion) => {
    console.log('Edit button clicked for question ID:', id);
    console.log('Current question:', currentQuestion);
    setEditingQuestion(currentQuestion);
    setEditingQuestionId(id);
    setShowEditModal(true);
  };

  const handleToggleView = () => {
    setShowOwnQuestions(!showOwnQuestions);
  };
  useEffect(() => {
    console.log('showEditModal changed:', showEditModal);
  }, [showEditModal]);

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
  const handleSaveChanges = async (updatedQuestion) => {
    try {
      // Log the question before the API call
      console.log("Updated Question before API call:", updatedQuestion);

      // Call the API to edit the question and wait for the response
      const response = await editQuestion(editingQuestionId, updatedQuestion, loggedInUser);

      // Log the response to ensure you get the updated question back
      console.log("API Response after editing:", response);

      // Now, update the local state with the edited question (once the API succeeds)
      const updatedQuestions = questions.map(q =>
        q._id === editingQuestionId ? {
          ...q,
          question: updatedQuestion,
          updatedAt: new Date().toISOString()  // Manually update the `updatedAt` field
        } : q // Use updatedQuestion, not editingQuestion
      );

      // Log the updated questions list for debugging

      // Finally, set the updated state
      setQuestions(updatedQuestions);

      // Close the modal after successfully updating
      setShowEditModal(false);
    } catch (error) {
      console.error('Error editing question:', error);
    }
  };

  const handlePostQuestion = async (newQuestion) => {
    try {


      // Create a full question object including the unique ID and other necessary fields
      const newQuestionData = {
        question: newQuestion,
        name: loggedInUser, //localStorage.getItem('username'), // Assuming you have the username in localStorage
        comments: [] // Initial comments can be empty
      };

      const res = await postQuestion(newQuestionData); // Pass the full object with unique ID
      setQuestions([res, ...questions]); // Add the new question to the list
      //setQuestion(''); // Clear the question input field
      setShowQuestionModal(false); // Close the modal
      fetchQuestions(); // Refresh the question list
    } catch (error) {
      console.error('Error posting question:', error);
    }
  };

  const filteredQuestions = showOwnQuestions ? questions.filter(q => q.name === loggedInUser) : questions;
  const sortedQuestions = filteredQuestions.sort((a, b) => {
    // Sort by updatedAt if available, otherwise by createdAt
    const aTime = a.updatedAt || a.createdAt;
    const bTime = b.updatedAt || b.createdAt;

    // Sort in descending order (most recent first)
    return new Date(bTime) - new Date(aTime);
  });

  return (
    <div className="questions-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <div className="d-flex justify-content-between mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setShowQuestionModal(true)} // Trigger the post modal
        >
          Post a Question
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleToggleView}
        >
          {showOwnQuestions ? 'View All Questions' : 'View My Questions'}
        </button>
      </div>
      {sortedQuestions.map((q) => (
        <div className="card mb-3 shadow-sm" key={q._id}>
          <div className="card-body">
            <h5 className="card-title">{q.question}</h5>
            <p className="card-text">By {q.name} on {new Date(q.createdAt).toLocaleString()}</p>
            {console.log(`CreatedAt: ${q.createdAt}, UpdatedAt: ${q.updatedAt}`)}
            {q.createdAt !== q.updatedAt && (
              <p className="card-text text-muted">Last updated at: {new Date(q.updatedAt).toLocaleString()}</p>
            )}
            {loggedInUser === q.name && (
              <>
                <button className="btn btn-sm btn-warning" onClick={() => {
                  console.log('Edit button clicked');  // Add this log
                  handleEditQuestion(q._id, q.question);
                }}>
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

      {/* Show the EditQuestionModal when needed */}
      <EditQuestionModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        question={editingQuestion}
        questionId={editingQuestionId}
        onSaveChanges={handleSaveChanges}
      // Pass the save function as a prop
      />

      <PostQuestionModal
        show={showQuestionModal}
        onHide={() => setShowQuestionModal(false)}
        onPostQuestion={handlePostQuestion} // Pass the function to handle posting
      />
      )
    </div>
  );
};

export default QuestionsList;
