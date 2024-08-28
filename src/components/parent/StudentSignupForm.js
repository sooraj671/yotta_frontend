import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentSignupForm = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    postalCode: "",
    studentGender: "",
    studentLevel: "",
    studentGrade: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Changing ${name} to ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    nextStep();
  };

  return (
    <section className="container mt-5">
      <header className="mb-4">
        {/* <h2 className="text-center">Finish signing up for Yotta Academy</h2> */}
      </header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <h3>Gender</h3>
            <div className="d-flex flex-column">
              <div className="form-check mb-2">
                <input
                  type="radio"
                  id="check-male"
                  name="studentGender"
                  value="male"
                  checked={formData.studentGender === "male"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label htmlFor="check-male" className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="check-female"
                  name="studentGender"
                  value="female"
                  checked={formData.studentGender === "female"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label htmlFor="check-female" className="form-check-label">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="postal-code" className="form-label">
              Postal Code
            </label>
            <input
              type="number"
              id="postal-code"
              className="form-control"
              placeholder="52313"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="student-level" className="form-label">
              Student's Level
            </label>
            <select
              id="student-level"
              className="form-select"
              name="studentLevel"
              value={formData.studentLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select Level</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="grade" className="form-label">
              Grade
            </label>
            <select
              id="grade"
              className="form-select"
              name="studentGrade"
              value={formData.studentGrade}
              onChange={handleChange}
              required
            >
              <option value="">Select Grade</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={prevStep}
            style={{ flex: 1, maxWidth: "100px" }}
          >
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-primary ms-2"
            style={{ flex: 1, maxWidth: "100px" }}
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default StudentSignupForm;
