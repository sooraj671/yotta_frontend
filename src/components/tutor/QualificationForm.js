import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarDropdown from './BarDropdown';

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
          <div className="col">
            <label htmlFor="student-level" className="form-label">
            Highest Education Level
            </label>
            <select
              id="student-level"
              className="form-select"
              value={studentLevel}
              onChange={handleStudentLevelChange}
            >
              <option value="">Select Education Level</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="grade" className="form-label">
            Tutor Category
            </label>
            <select
              id="grade"
              className="form-select"
              value={grade}
              onChange={handleGradeChange}
            >
              <option value="">Select Tutor Category</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
        </div>
        <div className="container mt-5"> <h6>Academic Qualifications & Grades</h6>
        <p>Please add AT LEAST TWO of your recent academic studies (e.g. Diploma + University OR A-level + University). For undergraduates, please also include your degree details and expected graduation date. To obtain the best match, it would be best to input your entire academic journey (i.e. Primary {'>'} Secondary {'>'} JC/Poly {'>'} University).</p>
   </div>
          <div className="container mt-5 d-flex justify-content-center">
      <div className="border rounded p-3" style={{ borderRadius: '10px', display: 'flex', width: '80%' }}>
        <div className="border-end pe-3" style={{ width: '30%', borderRight: '2px solid #ccc', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="text-center">PSLE</p>
          <p className="text-center">“O” Level</p>
          <p className="text-center">“A” Level</p>
          <p className="text-center">Diploma</p>
          <p className="text-center">Degree</p>
        </div>
        <div className="ps-3" style={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="input1" className="form-label">Name of Educational Institution</label>
                <input type="text" className="form-control" id="input1" />
              </div>
              <div className="mb-3">
                <label htmlFor="input2" className="form-label">Course of Study</label>
                <input type="text" className="form-control" id="input2" />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="datePicker1" className="form-label">Expected Graduation Date</label>
                <input type="date" className="form-control" id="datePicker1" />
              </div>
              <div className="mb-3">
                <label htmlFor="decimalInput1" className="form-label">Grade Point Average</label>
                <input type="number" step="0.01" className="form-control" id="decimalInput1" placeholder='4.3/5.0'/>
              </div>
            </div>

          </div>
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
