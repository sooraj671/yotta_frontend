import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

const BarDropdown = ({ name, onChange }) => {
  const [expanded, setExpanded] = useState(false); // State to track whether dropdown is expanded
  const [subjects, setSubjects] = useState([]);
  const [minimumRate, setMinimumRate] = useState('');

  const toggleDropdown = () => {
    setExpanded(!expanded); // Toggle expanded state
  };

  const handleSubjectChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSubjects([...subjects, id]);
    } else {
      setSubjects(subjects.filter((subject) => subject !== id));
    }
  };

  const handleMinimumRateChange = (e) => {
    setMinimumRate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(name, subjects, minimumRate);
    setExpanded(false); // Collapse dropdown after selection
  };

  return (
    <div className="card bar-dropdown-container">
      <div className="card-header d-flex justify-content-between align-items-center" onClick={toggleDropdown}>
        <span><b>{name}</b></span>
        <div className="toggle-icon">
          {expanded ? <BsDash /> : <BsPlus />}
        </div>
      </div>
      {expanded && (
        <div className="card-body dropdown-content">
          <div className="row">
            <div className="col">
              <p className="card-text">Subjects:</p>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="english"
                  onChange={handleSubjectChange}
                  checked={subjects.includes('english')}
                />
                <label className="form-check-label" htmlFor="english">English</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="math"
                  onChange={handleSubjectChange}
                  checked={subjects.includes('math')}
                />
                <label className="form-check-label" htmlFor="math">Math</label>
              </div>
              {/* Add more subjects checkboxes */}
            </div>
            <div className="col">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="science"
                  onChange={handleSubjectChange}
                  checked={subjects.includes('science')}
                />
                <label className="form-check-label" htmlFor="science">Science</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="history"
                  onChange={handleSubjectChange}
                  checked={subjects.includes('history')}
                />
                <label className="form-check-label" htmlFor="history">History</label>
              </div>
              {/* Add more subjects checkboxes */}
            </div>
            <div className="col">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="geography"
                  onChange={handleSubjectChange}
                  checked={subjects.includes('geography')}
                />
                <label className="form-check-label" htmlFor="geography">Geography</label>
              </div>
              {/* Add more subjects checkboxes */}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor={`${name}-minimum-rate`} className="form-label"><strong>Minimum Rate (per hour):</strong></label>
            <input
              type="text"
              className="form-control"
              id={`${name}-minimum-rate`}
              placeholder="Rate"
              value={minimumRate}
              onChange={handleMinimumRateChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default BarDropdown;
