import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../SpecialNeedsLocation.css'; // Import CSS file for additional styling

const ParentSignupForm = ({ formData, nextStep, prevStep, setFormData }) => {
  const [specialNeeds, setSpecialNeeds] = useState({
    dyslexia: false,
    autism: false,
    adhd: false,
    angerManagement: false,
    slowLearner: false,
    downSyndrome: false
  });

  const [preferredLocations, setPreferredLocations] = useState([]);

  // Handle special needs checkbox change
  const handleSpecialNeedsChange = (event) => {
    const { id, checked } = event.target;
    setSpecialNeeds(prevState => ({
      ...prevState,
      [id]: checked
    }));
  };

  // Handle preferred location selection
  const handleLocationClick = (location) => {
    if (preferredLocations.includes(location)) {
      setPreferredLocations(prevLocations => prevLocations.filter(loc => loc !== location));
    } else {
      setPreferredLocations(prevLocations => [...prevLocations, location]);
    }
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const updatedFormData = {
      ...formData,
      specialNeeds: specialNeeds,
      preferredLocations: preferredLocations
    };
    setFormData(updatedFormData);
  
    console.log('Form submitted:', updatedFormData);
    nextStep();
    // Proceed with next step or other logic as needed
  };

  return (
    <section className="container mt-5">
      <header className="mb-4">Finish signing up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="container mt-5">
          <div className="row mb-4">
            <div className="col">
              <div className="form-row">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="dyslexia"
                    checked={specialNeeds.dyslexia}
                    onChange={handleSpecialNeedsChange}
                  />
                  <label className="form-check-label" htmlFor="dyslexia">
                    Dyslexia
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autism"
                    checked={specialNeeds.autism}
                    onChange={handleSpecialNeedsChange}
                  />
                  <label className="form-check-label" htmlFor="autism">
                    Autism
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="adhd"
                    checked={specialNeeds.adhd}
                    onChange={handleSpecialNeedsChange}
                  />
                  <label className="form-check-label" htmlFor="adhd">
                    ADHD
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="angerManagement"
                    checked={specialNeeds.angerManagement}
                    onChange={handleSpecialNeedsChange}
                  />
                  <label className="form-check-label" htmlFor="angerManagement">
                    Anger Management
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="slowLearner"
                    checked={specialNeeds.slowLearner}
                    onChange={handleSpecialNeedsChange}
                  />
                  <label className="form-check-label" htmlFor="slowLearner">
                    Slow Learner
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="downSyndrome"
                    checked={specialNeeds.downSyndrome}
                    onChange={handleSpecialNeedsChange}
                  />
                  <label className="form-check-label" htmlFor="downSyndrome">
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
              <div
                className={`clickable-box ${
                  preferredLocations.includes("north") ? "active" : ""
                }`}
                onClick={() => handleLocationClick("north")}
              >
                <div className="box-content">
                  <p className="box-text text-center">
                    <strong>NORTH</strong>
                  </p>
                  <p className="box-text-light text-center">
                    Marsiling, Woodlands, Admiralty, Sembawang, Canberra,
                    Yishun, Khatib, Yio Chu Kang, Ang Mo Kio
                  </p>
                </div>
              </div>
              <div
                className={`clickable-box ${
                  preferredLocations.includes("north-east") ? "active" : ""
                }`}
                onClick={() => handleLocationClick("north-east")}
              >
                <div className="box-content">
                  <p className="box-text text-center">
                    <strong>NORTH EAST</strong>
                  </p>
                  <p className="box-text-light text-center">
                    Punggol, Sengkang, Buangkok, Hougang, Kovan, Serangoon,
                    Bartley, Lorong Chuan, Bishan, Toa Payoh, Potong Pasir
                  </p>
                </div>
              </div>
              <div
                className={`clickable-box ${
                  preferredLocations.includes("west") ? "active" : ""
                }`}
                onClick={() => handleLocationClick("west")}
              >
                <div className="box-content">
                  <p className="box-text text-center">
                    <strong>WEST</strong>
                  </p>
                  <p className="box-text-light text-center">
                    Buona Vista, Dover, Clementi, Jurong East, Lakeside, Chinese
                    Garden, Boon Lay, Pioneer, Jurong West
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`clickable-box ${
                  preferredLocations.includes("south") ? "active" : ""
                }`}
                onClick={() => handleLocationClick("south")}
              >
                <div className="box-content">
                  <p className="box-text text-center">
                    <strong>SOUTH</strong>
                  </p>
                  <p className="box-text-light text-center">
                    Orchard, Newton, Redhill, Tiong Bahru, Queenstown, Telok
                    Blangah, Harbourfront, Outram Park, Chinatown
                  </p>
                </div>
              </div>
              <div
                className={`clickable-box ${
                  preferredLocations.includes("north-west") ? "active" : ""
                }`}
                onClick={() => handleLocationClick("north-west")}
              >
                <div className="box-content">
                  <p className="box-text text-center">
                    <strong>NORTH WEST</strong>
                  </p>
                  <p className="box-text-light text-center">
                    Bukit Batok, Bukit Gombak, Choa Chu Kang, Yew Tee, Bukit
                    Panjang, Hillview, Beauty World, King Albert Park, Sixth
                    Avenue
                  </p>
                </div>
              </div>
              <div
                className={`clickable-box ${
                  preferredLocations.includes("east") ? "active" : ""
                }`}
                onClick={() => handleLocationClick("east")}
              >
                <div className="box-content">
                  <p className="box-text text-center">
                    <strong>EAST</strong>
                  </p>
                  <p className="box-text-light text-center">
                    Aljunied, Paya Lebar, Macpherson, Bedok, Eunos, Kembangan,
                    Tampines, Pasir Ris, Kallang, Geylang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 button-container">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={prevStep}
            style={{ width: "10%" }}
          >
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "10%" }}
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default ParentSignupForm;
