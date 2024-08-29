import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../SpecialNeedsLocation.css";
import "../../App.css";

const ParentSignupForm = ({ formData, nextStep, prevStep, setFormData }) => {
  const [specialNeeds, setSpecialNeeds] = useState({
    dyslexia: false,
    autism: false,
    adhd: false,
    angerManagement: false,
    slowLearner: false,
    downSyndrome: false,
  });

  const [preferredLocations, setPreferredLocations] = useState([]);

  const handleSpecialNeedsChange = (event) => {
    const { id, checked } = event.target;
    setSpecialNeeds((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleLocationClick = (location) => {
    if (preferredLocations.includes(location)) {
      setPreferredLocations((prevLocations) =>
        prevLocations.filter((loc) => loc !== location)
      );
    } else {
      setPreferredLocations((prevLocations) => [...prevLocations, location]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFormData = {
      ...formData,
      specialNeeds: specialNeeds,
      preferredLocations: preferredLocations,
    };
    setFormData(updatedFormData);
    console.log("Form submitted:", updatedFormData);
    nextStep();
  };

  const specialNeedsList = [
    "Dyslexia",
    "Autism",
    "ADHD",
    "Anger Management",
    "Slow Learner",
    "Down Syndrome",
  ];

  return (
    <section className="container mt-5">
      <form onSubmit={handleSubmit} className="form">
        <div className="container mt-5">
          <div className="card bar-dropdown-container mb-4">
            <div className="card-header text-center">
              <h5 className="mb-0">
                <strong>Experience in Special Needs</strong>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {specialNeedsList.map((need, index) => (
                  <div
                    className={`col-6 ${
                      index === specialNeedsList.length - 1 &&
                      specialNeedsList.length % 2 !== 0
                        ? "col-12"
                        : ""
                    }`}
                    key={need}
                  >
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={need.toLowerCase().replace(" ", "")}
                        onChange={handleSpecialNeedsChange}
                        checked={
                          specialNeeds[need.toLowerCase().replace(" ", "")]
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={need.toLowerCase().replace(" ", "")}
                      >
                        {need}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preferred Tutoring Location */}
          <div className="row mb-4">
            <div className="col">
              <h5 className="section-title mb-2">
               <strong> Preferred Tutoring Location </strong>
              </h5>
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
                  <p
                    className="box-text-light text-center"
                    style={{ fontSize: "14px" }}
                  >
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
                  <p
                    className="box-text-light text-center"
                    style={{ fontSize: "14px" }}
                  >
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
                  <p
                    className="box-text-light text-center"
                    style={{ fontSize: "14px" }}
                  >
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
                  <p
                    className="box-text-light text-center"
                    style={{ fontSize: "14px" }}
                  >
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
                  <p
                    className="box-text-light text-center"
                    style={{ fontSize: "14px" }}
                  >
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
                  <p
                    className="box-text-light text-center"
                    style={{ fontSize: "14px" }}
                  >
                    Aljunied, Paya Lebar, Macpherson, Bedok, Eunos, Kembangan,
                    Tampines, Pasir Ris, Kallang, Geylang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={prevStep}
            style={{ flex: 1, maxWidth: "100px" }}
          >
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-primary ms-2"
            style={{ flex: 1, maxWidth: "100px" }}
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default ParentSignupForm;
