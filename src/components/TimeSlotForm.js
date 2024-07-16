import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TimeSlotForm = ({nextStep, prevStep}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here if needed
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <header>Finish signing up for Yotta Academy</header>
      <form className="form" onSubmit={handleSubmit}>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12-3</td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
            </tr>
            <tr>
              <td>3-6</td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
            </tr>
            <tr>
              <td>6-9</td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
            </tr>
            <tr>
              <td>9-12</td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
            </tr>
            <tr>
              <td>13-16</td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
            </tr>
            <tr>
              <td>16-19</td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
            </tr>
            <tr>
              <td>19-22</td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
              <td><input type="checkbox" className="form-check-input" /></td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{width:'10%',marginTop: '15%' }}>
              Previous
            </button>
        <button type="submit" className="btn btn-primary" style={{width:'10%',marginTop: '15%' }}>Next</button>
      </form>
    </section>
  );
};

export default TimeSlotForm;
