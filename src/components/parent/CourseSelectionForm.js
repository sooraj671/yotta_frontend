import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseSelectionForm = ({ formValues, setFormValues, nextStep, prevStep }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelection = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update formValues with selected courses
    // setFormValues({
    //   ...formValues,
    //   courses: selectedCourses,
    // });
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <header>Select Courses</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Physics, Maths, Social Studies..."
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button className="btn btn-outline-secondary" type="button" id="search-addon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
        </div>
        <h6 style={{ marginTop: '20px' }}>Selected Subjects:</h6>

        <div className="row justify-content-center">
          <div className="col-6 mb-3">
            <div
              className={`border border-dark rounded p-3 ${selectedCourses.includes('Maths') ? 'bg-primary text-white' : ''}`}
              onClick={() => handleCourseSelection('Maths')}
              style={{ cursor: 'pointer' }}
            >
              Maths
            </div>
          </div>
          <div className="col-6 mb-3">
            <div
              className={`border border-dark rounded p-3 ${selectedCourses.includes('Science') ? 'bg-primary text-white' : ''}`}
              onClick={() => handleCourseSelection('Science')}
              style={{ cursor: 'pointer' }}
            >
              Science
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{width:'10%',marginTop: '30%' }}>
              Previous
            </button>
                    <button type="submit" className="btn btn-primary" style={{width:'10%',marginTop: '30%' }}>Next</button>
      </form>
    </section>
  );
};

export default CourseSelectionForm;
