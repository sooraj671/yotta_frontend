import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";

const BarDropdown = ({ name, onChange }) => {
  const [expanded, setExpanded] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [minimumRate, setMinimumRate] = useState("");

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

  const handleSubjectChange = (e) => {
    const { id, checked } = e.target;
    const subject = id;
    const updatedSubjects = checked
      ? [...subjects, subject]
      : subjects.filter((s) => s !== subject);
    setSubjects(updatedSubjects);
  };

  const handleMinimumRateChange = (e) => {
    setMinimumRate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subjects to submit:", subjects); // Debugging
    console.log("Minimum rate to submit:", minimumRate); // Debugging
    onChange(name, subjects, minimumRate); // Pass subjects and rate to parent
    setExpanded(false);
  };

  const subjectsList = ["English", "Math", "Science", "History", "Geography"];

  return (
    <div className="card bar-dropdown-container">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={toggleDropdown}
      >
        <span>
          <b>{name}</b>
        </span>
        <div className="toggle-icon">{expanded ? <BsDash /> : <BsPlus />}</div>
      </div>
      {expanded && (
        <div className="card-body dropdown-content">
          <p className="card-text">
            <strong>Subjects:</strong>
          </p>
          <div className="row">
            {subjectsList.map((subject, index) => (
              <div
                className={`col-6 ${
                  index === subjectsList.length - 1 ? "col-12" : ""
                }`}
                key={subject}
              >
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={subject}
                    onChange={handleSubjectChange}
                    checked={subjects.includes(subject)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={subject}
                  >
                    {subject}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor={`${name}-minimum-rate`} className="form-label">
              <strong>Minimum Rate (per hour):</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id={`${name}-minimum-rate`}
              placeholder="Rate"
              value={minimumRate}
              onChange={handleMinimumRateChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default BarDropdown;
