import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParentSignupForm = ({ formData, nextStep, prevStep, handleChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <header className="mb-4">Finish signing up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="first-name" className="form-label">Student's First Name</label>
              <input 
                type="text" 
                id="first-name" 
                className="form-control" 
                placeholder="John" 
                name="studentFirstName" // Add name attribute for handleChange to identify
                value={formData.studentFirstName} 
                onChange={handleChange} // Use handleChange for input change
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="form-label">Student's Last Name</label>
              <input 
                type="text" 
                id="last-name" 
                className="form-control" 
                placeholder="Doe" 
                name="studentLastName" // Add name attribute for handleChange to identify
                value={formData.studentLastName} 
                onChange={handleChange} // Use handleChange for input change
                required 
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <h3>Gender</h3>
              <div className="form-check">
                <input 
                  type="radio" 
                  id="check-male" 
                  name="studentGender" 
                  value="male" 
                  checked={formData.studentGender === 'male'} 
                  onChange={handleChange} // Use handleChange for input change
                  className="form-check-input" 
                />
                <label htmlFor="check-male" className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input 
                  type="radio" 
                  id="check-female" 
                  name="studentGender" 
                  value="female" 
                  checked={formData.studentGender === 'female'} 
                  onChange={handleChange} // Use handleChange for input change
                  className="form-check-input" 
                />
                <label htmlFor="check-female" className="form-check-label">Female</label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="postal-code" className="form-label">Postal Code</label>
              <input 
                type="number" 
                id="postal-code" 
                className="form-control" 
                placeholder="52313" 
                name="studentPostalCode" // Add name attribute for handleChange to identify
                value={formData.postalCode} 
                onChange={handleChange} // Use handleChange for input change
                required 
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="student-level" className="form-label">Student's Level</label>
              <select 
                id="student-level" 
                className="form-select" 
                name="studentLevel" // Add name attribute for handleChange to identify
                value={formData.studentLevel} 
                onChange={handleChange} // Use handleChange for input change
                required
              >
                <option value="">Select Level</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="grade" className="form-label">Grade</label>
              <select 
                id="grade" 
                className="form-select" 
                name="studentGrade" // Add name attribute for handleChange to identify
                value={formData.studentGrade} 
                onChange={handleChange} // Use handleChange for input change
                required
              >
                <option value="">Select Grade</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-3 button-container">
  <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{ width: '10%' }}> 
    Previous
  </button>
  <button type="submit" className="btn btn-primary" style={{ width: '10%' }}>Next</button>
</div>
   <div className='button-container'>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{width:'10%',marginTop: '5%' }}> 
          Previous
        </button>
        <button type="submit" className="btn btn-primary" style={{width:'10%',marginTop: '5%' }}>Next</button>
        </div>
      </form>
    </section>
  );
};

export default ParentSignupForm;
