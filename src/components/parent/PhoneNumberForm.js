import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const PhoneNumberForm = ({ formData, handleChange, nextStep, prevStep }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
    nextStep(); // Move to the next step
  };

  
  
  return (
    <section className="container mt-5">
      <header className="mb-4">Sign up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form" style={{ width: '40%', margin: '0 auto' }}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
      <PhoneInput
        country={'us'}
        value='1221'
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
        }}
        placeholder="Enter phone number"
        inputStyle={{ width: '100%' }}
      />
    </div>
      
        <div className="mb-3">
          <button type="button" className="btn btn-secondary me-2">Parent</button>
          <button type="button" className="btn btn-secondary">Student</button>
        </div>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{width:'30%',marginTop: '25%' }}>
              Previous
            </button>
            <button type="submit" className="btn btn-primary" style={{width:'30%',marginTop: '25%' }}>
              Next
            </button>      </form>
    </section>
  );
};

export default PhoneNumberForm;
