import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TimeSlotForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const initialSlots = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };
  const [selectedSlots, setSelectedSlots] = useState(initialSlots);

  useEffect(() => {
    if (formData.timeSlots) {
      setSelectedSlots(formData.timeSlots);
    }
  }, [formData.timeSlots]);

  const handleCheckboxChange = (day, slot) => {
    setSelectedSlots((prevSlots) => {
      const daySlots = prevSlots[day] || [];
      if (daySlots.includes(slot)) {
        return { ...prevSlots, [day]: daySlots.filter((s) => s !== slot) };
      } else {
        return { ...prevSlots, [day]: [...daySlots, slot] };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFormData = { ...formData, timeSlots: selectedSlots };
    setFormData(updatedFormData);
    console.log("Form submitted:", updatedFormData);
    nextStep();
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = [12, 15, 18, 21];

  return (
    <section className="container mt-5">
      <form className="form" onSubmit={handleSubmit}>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Time</th>
                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour}>
                  <td>{`${hour}-${hour + 3}`}</td>
                  {days.map((day) => (
                    <td key={`${day}-${hour}`}>
                      <div className="form-check d-flex justify-content-center">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selectedSlots[day].includes(hour)}
                          onChange={() => handleCheckboxChange(day, hour)}
                          id={`${day}-${hour}`}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         <div className="d-flex justify-content-center mb-3">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={prevStep}
            style={{ flex: 1, maxWidth: "150px" }}
          >
            Previous
          </button>
          <button
            type="submit"
            className="btn btn-primary ms-2"
            style={{ flex: 1, maxWidth: "150px" }}
          >
            Next
          </button>
          </div>
      </form>
    </section>
  );
};

export default TimeSlotForm;
