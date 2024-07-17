import React from 'react';

const CourseSelectionForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const { courses } = formData;

  const handleCourseSelection = (course) => {
    const updatedCourses = courses.includes(course)
      ? courses.filter((c) => c !== course)
      : [...courses, course];

    setFormData({
      ...formData,
      courses: updatedCourses,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    // You can perform form validation or other logic here before moving to the next step
    nextStep();
  };

  return (
    <section className="container mt-5">
      <header>Select Courses</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col-6 mb-3">
            <div
              className={`border border-dark rounded p-3 ${
                courses.includes('Maths') ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handleCourseSelection('Maths')}
              style={{ cursor: 'pointer' }}
            >
              Maths
            </div>
          </div>
          <div className="col-6 mb-3">
            <div
              className={`border border-dark rounded p-3 ${
                courses.includes('Science') ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handleCourseSelection('Science')}
              style={{ cursor: 'pointer' }}
            >
              Science
            </div>
          </div>
        </div>
        {/* Add more course selection options here as needed */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={prevStep}
            style={{ width: '10%' }}
          >
            Previous
          </button>
          <button type="submit" className="btn btn-primary" style={{ width: '10%' }}>
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default CourseSelectionForm;
