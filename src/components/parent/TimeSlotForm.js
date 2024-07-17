import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TimeSlotForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const initialSlots = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  };
  const [selectedSlots, setSelectedSlots] = useState(initialSlots);

  useEffect(() => {
    if (formData.timeSlots) {
      setSelectedSlots(formData.timeSlots);
    }
  }, [formData.timeSlots]);

  const handleCheckboxChange = (day, slot) => {
    setSelectedSlots(prevSlots => {
      const daySlots = prevSlots[day] || [];
      if (daySlots.includes(slot)) {
        return {
          ...prevSlots,
          [day]: daySlots.filter(s => s !== slot)
        };
      } else {
        return {
          ...prevSlots,
          [day]: [...daySlots, slot]
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFormData = {
      ...formData,
      timeSlots: selectedSlots
    };
    setFormData(updatedFormData);
    console.log('Form submitted:', updatedFormData);

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
            {[12, 15, 18, 21].map(hour => (
              <tr key={hour}>
                <td>{`${hour}-${hour + 3}`}</td>
                <td><input type="checkbox" className="form-check-input" checked={selectedSlots.Monday.includes(hour)} onChange={() => handleCheckboxChange('Monday', hour)} /></td>
                <td><input type="checkbox" className="form-check-input" checked={selectedSlots.Tuesday.includes(hour)} onChange={() => handleCheckboxChange('Tuesday', hour)} /></td>
                <td><input type="checkbox" className="form-check-input" checked={selectedSlots.Wednesday.includes(hour)} onChange={() => handleCheckboxChange('Wednesday', hour)} /></td>
                <td><input type="checkbox" className="form-check-input" checked={selectedSlots.Thursday.includes(hour)} onChange={() => handleCheckboxChange('Thursday', hour)} /></td>
                <td><input type="checkbox" className="form-check-input" checked={selectedSlots.Friday.includes(hour)} onChange={() => handleCheckboxChange('Friday', hour)} /></td>
                <td><input type="checkbox" className="form-check-input" checked={selectedSlots.Saturday.includes(hour)} onChange={() => handleCheckboxChange('Saturday', hour)} /></td>
                <td><input type="checkbox" className="form-check-input" checked={selectedSlots.Sunday.includes(hour)} onChange={() => handleCheckboxChange('Sunday', hour)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-secondary me-2" onClick={prevStep} style={{ width: '10%', marginTop: '15%' }}>
          Previous
        </button>
        <button type="submit" className="btn btn-primary" style={{ width: '10%', marginTop: '15%' }}>Next</button>
      </form>
    </section>
  );
};

export default TimeSlotForm;
