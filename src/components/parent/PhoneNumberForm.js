import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const PhoneNumberForm = ({ formData, setFormData, nextStep, onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    if(selectedOption != 'parent'){
      formData.studentFirstName = formData.firstName;
      formData.studentLastName = formData.lastName;
    }

    console.log('Form submitted with option:', selectedOption);
    console.log('Form data:', formData);

    // Pass selectedOption along with other form data
    onSelectOption(selectedOption);
    nextStep();
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePhoneChange = (value, country) => {
    // Update formData with the phone number value
    setFormData({
      ...formData,
      phoneNumber: value
    });
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
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <PhoneInput
            country={'us'}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
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
          <button type="submit" className="btn btn-secondary me-2" onClick={() => handleOptionSelect('parent')}>Parent</button>
          <button type="submit" className="btn btn-secondary" onClick={() => handleOptionSelect('student')}>Student</button>
        </div>
      </form>
    </section>
  );
};

export default PhoneNumberForm;
