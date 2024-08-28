import React from 'react';
import '../App.css';
const RoleSelection = ({ onSelectRole }) => {
  return (
    <section className="container mt-5 ">
      <h2>Sign Up</h2>
      <div className="row">
        <div className="col-md-6">
            <button
              className="btn btn-primary signup-button"
              onClick={() => onSelectRole("tutor")}
            >
              Sign Up as Tutor
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-primary signup-button"
              onClick={() => onSelectRole("parent-student")}
            >
              Sign Up as Parent/Student
            </button>
          </div>
        </div>
    </section>
  );
};

export default RoleSelection;
