import React from "react";
import PropTypes from "prop-types";

const CourseSelectionForm = ({ formData, setFormData, nextStep, prevStep }) => {
  // Ensure courses is initialized as an array
  const { courses = [] } = formData;

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
    console.log("Form submitted:", formData);
    // Perform form validation or other logic here before moving to the next step
    nextStep();
  };

  return (
    <section className="container mt-5">
      <header className="mb-2">
        <h3 className="fw-semibold fs-2">Select Courses</h3>
      </header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col-6 mb-3">
            <div
              className={`border border-dark rounded p-3 ${
                courses.includes("Maths") ? "bg-primary text-white" : ""
              }`}
              onClick={() => handleCourseSelection("Maths")}
              style={{ cursor: "pointer" }}
            >
              Maths
            </div>
          </div>
          <div className="col-6 mb-3">
            <div
              className={`border border-dark rounded p-3 ${
                courses.includes("Science") ? "bg-primary text-white" : ""
              }`}
              onClick={() => handleCourseSelection("Science")}
              style={{ cursor: "pointer" }}
            >
              Science
            </div>
          </div>
        </div>
        {/* Add more course selection options here as needed */}
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

// Define PropTypes for better type-checking
CourseSelectionForm.propTypes = {
  formData: PropTypes.shape({
    courses: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default CourseSelectionForm;
