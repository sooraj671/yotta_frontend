import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentSignupForm = ({ nextStep, prevStep }) => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    postalCode: "",
    studentGender: "",
    studentLevel: "",
    studentGrade: "",
  });

  // Handle change function to update form data
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
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <header className="mb-4">Finish signing up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col">
            <h3>Gender</h3>
            <div className="form-check">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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

        <div className="button-container">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={prevStep}
            style={{ width: "10%", marginTop: "0" }} /* Adjusted marginTop */
          >
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "10%", marginTop: "0" }} /* Adjusted marginTop */
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default StudentSignupForm;
