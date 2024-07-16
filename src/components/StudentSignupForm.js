import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentSignupForm = ({nextStep, prevStep}) => {
  const [gender, setGender] = useState('male');
  const [postalCode, setPostalCode] = useState('123');
  const [studentLevel, setStudentLevel] = useState('');
  const [grade, setGrade] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleStudentLevelChange = (event) => {
    setStudentLevel(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({ gender, postalCode, studentLevel, grade });
    nextStep();
    // You can add further logic here to submit the form data to your backend or move to the next step in a multi-step form
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
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={handleGenderChange}
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
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={handleGenderChange}
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
              value={postalCode}
              onChange={handlePostalCodeChange}
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
              value={studentLevel}
              onChange={handleStudentLevelChange}
            >
              <option value="">Select Level</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="grade" className="form-label">
              Grade
            </label>
            <select
              id="grade"
              className="form-select"
              value={grade}
              onChange={handleGradeChange}
            >
              <option value="">Select Grade</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
        </div>

        <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{width:'10%',marginTop: '25%' }}>
              Previous
            </button>
        <button type="submit" className="btn btn-primary" style={{width:'10%',marginTop: '25%' }}>
          Next
        </button>
      </form>
    </section>
  );
};

export default StudentSignupForm;
