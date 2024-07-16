import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../SpecialNeedsLocation.css'; // Import CSS file for additional styling

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
      
      <div className="container mt-5">
      {/* Experience in Special Needs */}
      <div className="row mb-4">
        <div className="col">
          <p className="section-title">Experience in Special Needs (Leave Blank If None)</p>
          <div className="form-row">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="checkbox-dyslexia" />
              <label className="form-check-label" htmlFor="checkbox-dyslexia">
                Dyslexia
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="checkbox-autism" />
              <label className="form-check-label" htmlFor="checkbox-autism">
                Autism
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="checkbox-adhd" />
              <label className="form-check-label" htmlFor="checkbox-adhd">
                ADHD
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="checkbox-anger-management" />
              <label className="form-check-label" htmlFor="checkbox-anger-management">
                Anger Management
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="checkbox-slow-learner" />
              <label className="form-check-label" htmlFor="checkbox-slow-learner">
                Slow Learner
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="checkbox-down-syndrome" />
              <label className="form-check-label" htmlFor="checkbox-down-syndrome">
                Down Syndrome
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Preferred Tutoring Location */}
      <div className="row mb-4">
        <div className="col">
          <p className="section-title">Preferred Tutoring Location</p>
        </div>
      </div>

      {/* Clickable Boxes */}
      <div className="row">
        <div className="col-md-6">
          <div className="clickable-box">
            <div className="box-content">
              <p className="box-text text-center"><strong>NORTH</strong></p>
              <p className="box-text-light text-center">Marsiling, Woodlands, Admiralty, Sembawang, Canberra, Yishun, Khatib, Yio Chu Kang, Ang Mo Kio</p>
            </div>
          </div>
          <div className="clickable-box">
            <div className="box-content">
              <p className="box-text text-center"><strong>NORTH EAST</strong></p>
              <p className="box-text-light text-center">Punggol, Sengkang, Buangkok, Hougang, Kovan, Serangoon, Bartley, Lorong Chuan, Bishan, Toa Payoh, Potong Pasir</p>
            </div>
          </div>
          <div className="clickable-box">
            <div className="box-content">
              <p className="box-text text-center"><strong>WEST</strong></p>
              <p className="box-text-light text-center">Buona Vista, Dover, Clementi, Jurong East, Lakeside, Chinese Garden, Boon Lay, Pioneer, Jurong West</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="clickable-box">
            <div className="box-content">
              <p className="box-text text-center"><strong>SOUTH</strong></p>
              <p className="box-text-light text-center">Orchard, Newton, Redhill, Tiong Bahru, Queenstown, Telok Blangah, Harbourfront, Outram Park, Chinatown</p>
            </div>
          </div>
          <div className="clickable-box">
            <div className="box-content">
              <p className="box-text text-center"><strong>NORTH WEST</strong></p>
              <p className="box-text-light text-center">Bukit Batok, Bukit Gombak, Choa Chu Kang, Yew Tee, Bukit Panjang, Hillview, Beauty World, King Albert Park, Sixth Avenue</p>
            </div>
          </div>
          <div className="clickable-box">
            <div className="box-content">
              <p className="box-text text-center"><strong>EAST</strong></p>
              <p className="box-text-light text-center">Aljunied, Paya Lebar, Macpherson, Bedok, Eunos, Kembangan, Tampines, Pasir Ris, Kallang, Geylang</p>
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
