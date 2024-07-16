import React from 'react';

const LessonFrequencyForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here if needed
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <header>Finish signing up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-4">
          <div className="col">
            <button
              className={`btn ${formData.lessonsPerWeek === 1 ? 'btn-dark' : 'btn-outline-dark'}`}
              style={{ borderRadius: '15px', padding: '1px 20px' }}
              onClick={() => setFormData({ ...formData, lessonsPerWeek: 1 })}
            >
              1 lesson per week
            </button>
          </div>
          <div className="col">
            <button
              className={`btn ${formData.lessonsPerWeek === 2 ? 'btn-dark' : 'btn-outline-dark'}`}
              style={{ borderRadius: '15px', padding: '1px 20px' }}
              onClick={() => setFormData({ ...formData, lessonsPerWeek: 2 })}
            >
              2 lessons per week
            </button>
          </div>
          <div className="col">
            <button
              className={`btn ${formData.lessonsPerWeek === 3 ? 'btn-dark' : 'btn-outline-dark'}`}
              style={{ borderRadius: '15px', padding: '1px 20px' }}
              onClick={() => setFormData({ ...formData, lessonsPerWeek: 3 })}
            >
              3 lessons per week
            </button>
          </div>
          <div className="col">
            <button
              className={`btn ${formData.lessonsPerWeek === 4 ? 'btn-dark' : 'btn-outline-dark'}`}
              style={{ borderRadius: '15px', padding: '1px 20px' }}
              onClick={() => setFormData({ ...formData, lessonsPerWeek: 4 })}
            >
              4 lessons per week
            </button>
          </div>
          <div className="col">
            <button
              className={`btn ${formData.lessonsPerWeek === 5 ? 'btn-dark' : 'btn-outline-dark'}`}
              style={{ borderRadius: '15px', padding: '1px 20px' }}
              onClick={() => setFormData({ ...formData, lessonsPerWeek: 5 })}
            >
              5 lessons per week
            </button>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <div className="dropdown-container">
              <div className="dropdown-heading">Your tuition budget (Per Lesson)</div>
              <select
                className="form-control"
                name="tuitionBudget"
                value={formData.tuitionBudget}
                onChange={handleChange}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dropdown-container">
              <div className="dropdown-heading">Preferred Tutor Gender</div>
              <select
                className="form-control"
                name="preferredGender"
                value={formData.preferredGender}
                onChange={handleChange}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="input-box">
              <label>Preferrred Start Date</label>
              <input
                type="date"
                className="form-control"
                name="preferredStartDate"
                value={formData.preferredStartDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-box">
              <label>Length of Commitment Needed (In Months)</label>
              <input
                type="text"
                className="form-control"
                name="commitmentLength"
                value={formData.commitmentLength}
                onChange={handleChange}
                placeholder="3 Months"
                // required
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{width:'10%',marginTop: '25%' }}>
              Previous
            </button>
            <button type="submit" className="btn btn-primary" style={{width:'10%',marginTop: '25%' }}>
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LessonFrequencyForm;
