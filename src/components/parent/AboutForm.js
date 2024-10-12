import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutForm = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  setFormSubmitted, role
}) => {
  const [hasAnotherChild, setHasAnotherChild] = useState(false);

  const handleTextAreaChange = (event) => {
    setFormData({ ...formData, expectations: event.target.value });
  };

  const handleYesButtonClick = () => {
    setHasAnotherChild(true);
  };

  const handleNoButtonClick = () => {
    setHasAnotherChild(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-4">
          <textarea
            className="form-control"
            style={{
              width: "100%",
              height: "250px",
              padding: "15px",
              fontSize: "16px",
              borderRadius: "10px",
            }}
            placeholder="State your expectations and special needs here. Example: '1 hour Math', '1 hour Science', or 'ADHD/Dyslexia/Autism', 'Need to give more homework/materials', 'May need to increase frequency of lessons closer to the examinations', etc."
            value={formData.expectations}
            onChange={handleTextAreaChange}
          ></textarea>
        </div>
        {(role === "parent") && (

          <div className="d-flex justify-content-center mb-4">
            <p className="text-center fs-5 mb-4">
              Do you have another child you wish to sign up for?
            </p>
            <button
              type="button"
              className="btn btn-dark mx-2"
              onClick={handleYesButtonClick}
              style={{ minWidth: "50px" }}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-light mx-2"
              onClick={handleNoButtonClick}
              style={{ minWidth: "50px" }}
            >
              No
            </button>
          </div>
        )}
        {hasAnotherChild && (
          <div className="mb-4">
            {/* Render another instance of the AboutForm or any other child signup form */}
            <AboutForm
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              role={role}
            />
          </div>
        )}

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
            Complete
          </button>
        </div>
      </form>
    </section>
  );
};

export default AboutForm;
