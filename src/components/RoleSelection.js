import React from "react";
import "../App.css";
const RoleSelection = ({ onSelectRole }) => {
  return (
    <section className="container mt-5 ">
      <h2>Sign Up</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 mb-2 mb-md-0">
          <button
            className="btn btn-primary signup-button w-100"
            onClick={() => onSelectRole("tutor")}
          >
            Sign Up as Tutor
          </button>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <button
            className="btn btn-primary signup-button w-100"
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
