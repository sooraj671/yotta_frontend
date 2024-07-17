import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutForm = ({ formData, setFormData, nextStep, prevStep }) => {
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
    console.log('Form submitted:', formData);

    // Handle form submission logic if needed
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <header>Finish signing up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          style={{ width: '100%', height: '300px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '10px' }}
          placeholder="State your expectations and special needs here.
          Example: '1 hour Math', '1 hour Science' or, 'ADHD/Dyslexia/Autism', 'Need to give more homework/materials', 'May need to increase frequency of lessons closer to the examinations' etc."
          value={formData.expectations}
          onChange={handleTextAreaChange}
        ></textarea>

        <p style={{ fontSize: '20px', textAlign: 'center', margin: '20px 0' }}>Do you have another child you wish to sign up for?</p>

        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-dark mx-2" onClick={handleYesButtonClick}>
            Yes
          </button>
          <button type="button" className="btn btn-light mx-2" onClick={handleNoButtonClick}>
            No
          </button>
        </div>

        {hasAnotherChild && (
          <div>
            {/* Render another instance of the AboutForm or any other child signup form */}
            <AboutForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          </div>
        )}

        <div className="mt-3">
          <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{ width: '10%', marginTop: '10%' }}>
            Previous
          </button>
          <button type="submit" className="btn btn-primary" style={{ width: '10%', marginTop: '10%' }}>
            Complete
          </button>
        </div>
      </form>
    </section>
  );
};

export default AboutForm;
