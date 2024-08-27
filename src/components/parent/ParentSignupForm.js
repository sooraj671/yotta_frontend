import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ParentSignupForm = ({ formData, nextStep, prevStep, handleChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <header className="mb-4 text-center">
        {/* <h2>Finish Signing Up for Yotta Academy</h2> */}
      </header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label">
                Student's First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="form-control"
                placeholder="John"
                name="studentFirstName"
                value={formData.studentFirstName}
                onChange={handleChange}
                required
              />
            </div>
            <div
              className="mb-3"
              style={{ padding: "15px", paddingLeft: "4px" }}
            >
              <label htmlFor="last-name" className="form-label">
                Student's Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="form-control"
                placeholder="Doe"
                name="studentLastName"
                value={formData.studentLastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <h3>Gender</h3>
              <div className="row">
                <div className="col-12 mb-2">
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
                </div>
                <div className="col-12">
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
            </div>
            <div className="mb-3">
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
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
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
          </div>
          <div className="col-md-6">
            <div className="mb-3">
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
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={prevStep}
            style={{ flex: 1, maxWidth: "150px" }}
          >
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-primary ms-2"
            style={{ flex: 1, maxWidth: "150px" }}
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default ParentSignupForm;
