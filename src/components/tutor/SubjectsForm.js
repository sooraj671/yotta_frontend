import React from 'react';
import BarDropdown from './BarDropdown';

const ParentSignupForm = ({ nextStep, prevStep, formData, setFormData }) => {

  const handleDropdownChange = (levelName, selectedSubjects, rate) => {
    console.log('Level Name:', levelName); // Debugging
    console.log('Selected Subjects:', selectedSubjects); // Debugging
    console.log('Rate:', rate); // Debugging

    const updatedLevel = {
      name: levelName,
      subjects: selectedSubjects, // This should be an array of subjects
      rate: rate, // This should be a single value
    };

    setFormData(prevFormData => {
      const existingLevelIndex = prevFormData.levels.findIndex(
        (level) => level.name === levelName
      );

      let updatedLevels = [...prevFormData.levels];

      if (existingLevelIndex > -1) {
        updatedLevels[existingLevelIndex] = updatedLevel;
      } else {
        updatedLevels.push(updatedLevel);
      }

      return {
        ...prevFormData,
        levels: updatedLevels,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <section className="container mt-5">
      <form onSubmit={handleSubmit} className="form">
        <div className="row mb-3">
          <BarDropdown
            name="Primary"
            onChange={(selectedSubjects, rate) =>
              handleDropdownChange('Primary', selectedSubjects, rate)
            }
          />
          <BarDropdown
            name="Lower Secondary"
            onChange={(name, selectedSubjects, rate) =>
              handleDropdownChange(name, selectedSubjects, rate)
            }
          />
          <BarDropdown
            name="Upper Secondary"
            onChange={(name, selectedSubjects, rate) =>
              handleDropdownChange(name, selectedSubjects, rate)
            }
          />
          <BarDropdown
            name="Junior College"
            onChange={(name, selectedSubjects, rate) =>
              handleDropdownChange(name, selectedSubjects, rate)
            }
          />
          <BarDropdown
            name="International Baccalaureate"
            onChange={(name, selectedSubjects, rate) =>
              handleDropdownChange(name, selectedSubjects, rate)
            }
          />
          <BarDropdown
            name="Integrated Programme"
            onChange={(name, selectedSubjects, rate) =>
              handleDropdownChange(name, selectedSubjects, rate)
            }
          />
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
