import React from "react";

const LessonFrequencyForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    nextStep();
  };

  // CHANGE: Added custom styles for buttons and dropdowns
  const buttonStyle = {
    borderRadius: "10px",
    padding: "5px 20px",
    margin: "5px",
    transition: "all 0.3s ease",
  };

  const dropdownStyle = {
    borderRadius: "2px",
    padding: "10px",
    marginBottom: "15px",
  };

  return (
    <section className="container mt-5">
      <form onSubmit={handleSubmit} className="form">
        {/* CHANGE: Improved layout and styling for lesson frequency buttons */}
        <div className="mb-4">
          <h5 className="mb-3">Lessons per week:</h5>
          <div className="d-flex justify-content-center flex-wrap">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                className={`btn ${
                  formData.lessonsPerWeek === num.toString()
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                style={buttonStyle}
                onClick={() =>
                  setFormData({ ...formData, lessonsPerWeek: num.toString() })
                }
              >
                {num} {num === 1 ? "lesson" : "lessons"} per week
              </button>
            ))}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="tuitionBudget ">
                Your tuition budget (Per Lesson)
              </label>
              <select 
                id="tuitionBudget"
                className="form-control"
                name="tuitionBudget"
                value={formData.tuitionBudget}
                onChange={handleChange}
                style={dropdownStyle}
              >
                <option value="">Choose budget</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-150">$100 - $150</option>
                <option value="150-200">$150 - $200</option>
                <option value="200+">$200+</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="tutorGenderPreference">
                Preferred Tutor Gender
              </label>
              <select
                id="tutorGenderPreference"
                className="form-control"
                name="tutorGenderPreference"
                value={formData.tutorGenderPreference}
                onChange={handleChange}
                style={dropdownStyle}
              >
                <option value="">Choose</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="No Preference">No Preference</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="preferredStartDate">Preferred Start Date</label>
              <input
                type="date"
                id="preferredStartDate"
                className="form-control"
                name="preferredStartDate"
                value={formData.preferredStartDate}
                onChange={handleChange}
                style={dropdownStyle}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="commitmentLength">
                Length of Commitment Needed (In Months)
              </label>
              <input
                type="number"
                id="commitmentLength"
                className="form-control"
                name="commitmentLength"
                value={formData.commitmentLength}
                onChange={handleChange}
                placeholder="e.g., 3"
                min="1"
                style={dropdownStyle}
              />
            </div>
          </div>
        </div>

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

export default LessonFrequencyForm;
