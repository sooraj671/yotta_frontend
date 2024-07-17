import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ParentSignupForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const [gender, setGender] = useState(formData.gender || 'male'); // Default gender is male if not set
  const [race, setRace] = useState(formData.race || 'Chinese'); // Default race is Chinese if not set

  // Update local state when formData changes
  useEffect(() => {
    setGender(formData.gender || 'male');
    setRace(formData.race || 'Chinese');
  }, [formData]);

  // Event handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for gender change
  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setGender(genderValue); // Update local state first
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: genderValue, // Update formData using functional update to ensure latest state
    }));
  };

  // Event handler for race change
  const handleRaceChange = (event) => {
    const raceValue = event.target.value;
    setRace(raceValue); // Update local state first
    setFormData((prevFormData) => ({
      ...prevFormData,
      race: raceValue, // Update formData using functional update to ensure latest state
    }));
  };

  // Form submission handler
  const handleSubmit = (event) => {
    
    event.preventDefault();
    formData.gender = gender;
    formData.race = race;
    // Handle form submission logic (e.g., sending data to server)
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
              <label htmlFor="first-name" className="form-label">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                className="form-control"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="last-name" className="form-label">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                className="form-control"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <PhoneInput
                country={'us'}
                value={formData.phoneNumber || ''}
                inputProps={{
                  name: 'phoneNumber',
                  required: true,
                  autoFocus: true,
                }}
                onChange={(value) => setFormData({ ...formData, phoneNumber: value })}
                placeholder="Enter phone number"
                inputStyle={{ width: '100%' }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="postal-code" className="form-label">Postal Code</label>
              <input
                type="number"
                id="postal-code"
                name="postalCode"
                className="form-control"
                placeholder="52313"
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
              <label className="form-label">Gender</label>
              <div className="d-flex">
                <div className="form-check me-3">
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
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Race</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    type="radio"
                    id="check-Chinese"
                    name="race"
                    value="Chinese"
                    checked={race === 'Chinese'}
                    onChange={handleRaceChange}
                    className="form-check-input"
                  />
                  <label htmlFor="check-Chinese" className="form-check-label">Chinese</label>
                </div>
                <div className="form-check me-3">
                  <input
                    type="radio"
                    id="check-Malay"
                    name="race"
                    value="Malay"
                    checked={race === 'Malay'}
                    onChange={handleRaceChange}
                    className="form-check-input"
                  />
                  <label htmlFor="check-Malay" className="form-check-label">Malay</label>
                </div>
                <div className="form-check me-3">
                  <input
                    type="radio"
                    id="check-Indian"
                    name="race"
                    value="Indian"
                    checked={race === 'Indian'}
                    onChange={handleRaceChange}
                    className="form-check-input"
                  />
                  <label htmlFor="check-Indian" className="form-check-label">Indian</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="check-Others"
                    name="race"
                    value="Others"
                    checked={race === 'Others'}
                    onChange={handleRaceChange}
                    className="form-check-input"
                  />
                  <label htmlFor="check-Others" className="form-check-label">Others</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={prevStep}
          style={{ width: '10%', marginTop: '15%' }}
        >
          Previous
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '10%', marginTop: '15%' }}
        >
          Next
        </button>
      </form>
    </section>
  );
};

export default ParentSignupForm;
