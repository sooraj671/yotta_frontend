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
          
          <BarDropdown name="Primary"></BarDropdown>
          <BarDropdown name="Lower Secondary"></BarDropdown>
          <BarDropdown name="Upper Secondary"></BarDropdown>
          <BarDropdown name="Junior College"></BarDropdown>
          <BarDropdown name="International Baccalaureate"></BarDropdown>
          <BarDropdown name="Integrated Programme"></BarDropdown>
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
