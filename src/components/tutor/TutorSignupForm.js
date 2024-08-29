import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../../App.css';

const ParentSignupForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const [gender, setGender] = useState(formData.gender || 'male');
  const [race, setRace] = useState(formData.race || 'Chinese');

  useEffect(() => {
    setGender(formData.gender || 'male');
    setRace(formData.race || 'Chinese');
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setGender(genderValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: genderValue,
    }));
  };

  const handleRaceChange = (event) => {
    const raceValue = event.target.value;
    setRace(raceValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      race: raceValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.gender = gender;
    formData.race = race;
    console.log('Form submitted:', formData);
    nextStep();
  };

  return (
    <section className="container mt-5">
      {/* <h2 className="mb-4">Finish signing up for Yotta Academy</h2> */}
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
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
              <label htmlFor="last-name" className="form-label">
                Last Name
              </label>
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
              <p class="Phone">Phone Number</p>
              <PhoneInput
                country={"us"}
                value={formData.phoneNumber}
                
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                placeholder="Enter phone number"
                inputStyle={{ width: "100%", height: "38px" }}
              />
            </div>
            {/* <div className="mb-3">
             
              <PhoneInput
                country={"us"}
                value={formData.phoneNumber || ""}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: true,
                }}
                onChange={(value) =>
                  setFormData({ ...formData, phoneNumber: value })
                }
                placeholder="Enter phone number"
                inputStyle={{ width: "100%" }}
                containerStyle={{ height: '38px' }}
              />
            </div> */}
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="postal-code" className="form-label">
                Postal Code
              </label>
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
          <div className="col-md-6 mb-3">
            <h4>Gender</h4>
            <div className="d-flex flex-column">
              <div className="form-check mb-2">
                <input
                  type="radio"
                  id="check-male"
                  name="studentGender"
                  value="male"
                  checked={gender === "male"}
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
                  name="studentGender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                  className="form-check-input"
                />
                <label htmlFor="check-female" className="form-check-label">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <h4>Race</h4>
            <div className="d-flex flex-column">
              {["Chinese", "Malay", "Indian", "Others"].map((raceOption) => (
                <div key={raceOption} className="form-check mb-2">
                  <input
                    type="radio"
                    id={`check-${raceOption}`}
                    name="race"
                    value={raceOption}
                    checked={race === raceOption}
                    onChange={handleRaceChange}
                    className="form-check-input"
                  />
                  <label
                    htmlFor={`check-${raceOption}`}
                    className="form-check-label"
                  >
                    {raceOption}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={prevStep}
            style={{ flex: 1, maxWidth: "130px" }}
          >
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-primary ms-2"
            style={{ flex: 1, maxWidth: "130px" }}
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default ParentSignupForm;