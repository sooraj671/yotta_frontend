import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarDropdown from './BarDropdown';
import '../../App.css';

const ParentSignupForm = ({ nextStep, prevStep, formData, setFormData }) => {
  const [dropdownData, setDropdownData] = useState({
    primary: {
      subjects: [],
      minimumRate: ''
    },
    lowerSecondary: {
      subjects: [],
      minimumRate: ''
    },
    upperSecondary: {
      subjects: [],
      minimumRate: ''
    },
    juniorCollege: {
      subjects: [],
      minimumRate: ''
    },
    internationalBaccalaureate: {
      subjects: [],
      minimumRate: ''
    },
    integratedProgramme: {
      subjects: [],
      minimumRate: ''
    }
  });

  // UseEffect to update formData when dropdownData changes
  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      dropdownData: dropdownData
    }));
  }, [dropdownData, setFormData]);

  // Handle dropdown change
  const handleDropdownChange = (name, subjects, minimumRate) => {
    setDropdownData({
      ...dropdownData,
      [name.toLowerCase().replace(' ', '')]: {
        subjects: subjects,
        minimumRate: minimumRate
      }
    });
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    nextStep(); // Proceed to next step
  };

  return (
    <section className="container mt-5">
      <header className="mb-4">Finish signing up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          {/* Render BarDropdown components */}
          <BarDropdown name="Primary" onChange={handleDropdownChange} />
          <BarDropdown name="Lower Secondary" onChange={handleDropdownChange} />
          <BarDropdown name="Upper Secondary" onChange={handleDropdownChange} />
          <BarDropdown name="Junior College" onChange={handleDropdownChange} />
          <BarDropdown name="International Baccalaureate" onChange={handleDropdownChange} />
          <BarDropdown name="Integrated Programme" onChange={handleDropdownChange} />
        </div>

      <div className="mb-3 button-container">
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{ width: '10%', marginTop: '15%' }}>
          Previous
        </button>
        <button type="submit" className="btn btn-primary" style={{ width: '10%', marginTop: '15%' }}>
          Next
          </button>
      </div>
      </form>
    </section>
  );
};

export default ParentSignupForm;
