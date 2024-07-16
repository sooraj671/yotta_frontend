import React from 'react';

const ParentOrStudentSelection = ({ onSelectOption }) => {
  return (
    <section className="container mt-5">
      <h2>Sign Up</h2>
      <div className="row">
        <div className="col-md-6">
          <button
            className="btn btn-primary w-100"
            onClick={() => onSelectOption('parent')}
          >
            Sign Up as Parent
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-primary w-100"
            onClick={() => onSelectOption('student')}
          >
            Sign Up as Student
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParentOrStudentSelection;
