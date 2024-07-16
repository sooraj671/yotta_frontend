import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs'; // Import icons from React Icons library
import '../../BarDropdown.css'; // Optional: CSS file for additional styling

const BarDropdown = ({ name }) => {
  const [expanded, setExpanded] = useState(false); // State to track whether dropdown is expanded

  const toggleDropdown = () => {
    setExpanded(!expanded); // Toggle expanded state
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
             <div className="col">
              <p className="card-text">Subjects:</p>
            </div>
          <div className="row">
           
            <br></br>
            <div className="col">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox1" />
                <label className="form-check-label" htmlFor="checkbox1">English</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox2" />
                <label className="form-check-label" htmlFor="checkbox2">Math</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox3" />
                <label className="form-check-label" htmlFor="checkbox3">Science</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox9" />
                <label className="form-check-label" htmlFor="checkbox9">Higher Malay</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox4" />
                <label className="form-check-label" htmlFor="checkbox4">Chinese, Higher Chinese</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox5" />
                <label className="form-check-label" htmlFor="checkbox5">History</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox6" />
                <label className="form-check-label" htmlFor="checkbox6">Geography</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox9" />
                <label className="form-check-label" htmlFor="checkbox9">Higher Tamil</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox7" />
                <label className="form-check-label" htmlFor="checkbox7">Social Studies</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox8" />
                <label className="form-check-label" htmlFor="checkbox8">Tamil</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox9" />
                <label className="form-check-label" htmlFor="checkbox9">Malay</label>
              </div>
            
              
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox9" />
                <label className="form-check-label" htmlFor="checkbox9">Hindi</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Minimum Rate (per hour):</strong></label>
            <p>Only receive assignments that offer above this rate.</p>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Rate" />
          </div>
         
        </div>
        
      )}
    </div>
  );
};

export default BarDropdown;
