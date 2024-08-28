import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParentSignupForm = ({ formData, nextStep, prevStep, setFormData }) => {
  const [educationLevel, setEducationLevel] = useState('Option 1');
  const [tutorCategory, setTutorCategory] = useState('');
  const [educationDetails, setEducationDetails] = useState([
    { institution: '', course: '', expectedGraduationDate: '', gpa: '' }
  ]);

  const handleEducationLevelChange = (event) => setEducationLevel(event.target.value);
  const handleTutorCategory = (event) => setTutorCategory(event.target.value);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...educationDetails];
    list[index][name] = value;
    setEducationDetails(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFormData = {
      ...formData,
      educationLevel,
      tutorCategory,
      educationDetails
    };
    setFormData(updatedFormData);
    console.log('Form submitted:', updatedFormData);
    nextStep();
  };

  return (
    <section className="container mt-5">
      {/* <header className="mb-4">Finish signing up for Yotta Academy</header> */}
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="student-level" className="form-label">
              Highest Education Level
            </label>
            <select
              id="student-level"
              className="form-select"
              value={educationLevel}
              onChange={handleEducationLevelChange}
            >
              <option value="">Select Education Level</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="grade" className="form-label">
              Tutor Category
            </label>
            <select
              id="grade"
              className="form-select"
              value={tutorCategory}
              onChange={handleTutorCategory}
            >
              <option value="">Select Tutor Category</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
        </div>

        <div className="container mt-5">
          <h6>Academic Qualifications & Grades</h6>
          <p>
            Please add AT LEAST TWO of your recent academic studies (e.g.
            Diploma + University OR A-level + University). For undergraduates,
            please also include your degree details and expected graduation
            date. To obtain the best match, it would be best to input your
            entire academic journey (i.e. Primary {">"} Secondary {">"} JC/Poly{" "}
            {">"} University).
          </p>
          {educationDetails.map((education, index) => (
            <div key={index} className="mt-4 border rounded p-3">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor={`institution-${index}`}
                      className="form-label"
                    >
                      Name of Educational Institution
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`institution-${index}`}
                      name="institution"
                      value={education.institution}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`course-${index}`} className="form-label">
                      Course of Study
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`course-${index}`}
                      name="course"
                      value={education.course}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label
                      htmlFor={`graduationDate-${index}`}
                      className="form-label"
                    >
                      Expected Graduation Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id={`graduationDate-${index}`}
                      name="expectedGraduationDate"
                      value={education.expectedGraduationDate}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`gpa-${index}`} className="form-label">
                      Grade Point Average
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`gpa-${index}`}
                      name="gpa"
                      value={education.gpa}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
