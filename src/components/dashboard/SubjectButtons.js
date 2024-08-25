import React from 'react';
import './style/SubjectButtons.css';

const SubjectButtons = () => {
  const subjects = [
    'Math', 'Science', 'English', 'History', 
    'Geography', 'Physics', 'Chemistry', 'Biology'
  ];

  return (
    <div className="subject-buttons">
      {subjects.map((subject, index) => (
        <button key={index} className="subject-button">
          {subject}
        </button>
      ))}
    </div>
  );
};

export default SubjectButtons;
