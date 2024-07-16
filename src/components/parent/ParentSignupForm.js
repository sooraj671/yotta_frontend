import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParentSignupForm = ({formData,nextStep,prevStep}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male'); // Default gender is male
  const [postalCode, setPostalCode] = useState('123');
  const [studentLevel, setStudentLevel] = useState('Option 1');
  const [grade, setGrade] = useState('');

  // Event handlers for input changes
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handlePostalCodeChange = (event) => setPostalCode(event.target.value);
  const handleStudentLevelChange = (event) => setStudentLevel(event.target.value);
  const handleGradeChange = (event) => setGrade(event.target.value);

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to server)
    const formData = {
      firstName,
      lastName,
      gender,
      postalCode,
      studentLevel,
      grade
    };
    console.log('Form submitted:', formData);
    nextStep();
    // Proceed with next step or other logic as needed
  };

  return (
    <section className="container mt-5">
      <header className="mb-4">Finish signing up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label">Student's First Name</label>
              <input 
                type="text" 
                id="first-name" 
                className="form-control" 
                placeholder="John" 
                value={formData.firstName} 
                onChange={handleFirstNameChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="form-label">Student's Last Name</label>
              <input 
                type="text" 
                id="last-name" 
                className="form-control" 
                placeholder="Doe" 
                value={formData.lastName} 
                onChange={handleLastNameChange} 
                required 
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
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
                <label htmlFor="check-male" className="form-check-label">Male</label>
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
                <label htmlFor="check-female" className="form-check-label">Female</label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="postal-code" className="form-label">Postal Code</label>
              <input 
                type="number" 
                id="postal-code" 
                className="form-control" 
                placeholder="52313" 
                value={formData.postalCode} 
                onChange={handlePostalCodeChange} 
                required 
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="student-level" className="form-label">Student's Level</label>
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
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="grade" className="form-label">Grade</label>
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
        </div>
        
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{width:'10%',marginTop: '15%' }}> 
              Previous
            </button>
                    <button type="submit" className="btn btn-primary" style={{width:'10%',marginTop: '15%' }}>Next</button>
      </form>
    </section>
  );
};

export default ParentSignupForm;
