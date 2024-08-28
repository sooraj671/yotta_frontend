import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormDataDisplay from "./FormDataDisplay";
import RoleSelection from "./RoleSelection";
import authService from "../services/authService";
import ParentOrStudentSelection from "../components/parent/ParentOrStudentSelection";
import TutorSignupForm from "../components/tutor/TutorSignupForm";
import LocationForm from "../components/tutor/LocationForm";
import QualificationForm from "../components/tutor/QualificationForm";
import SubjectsForm from "../components/tutor/SubjectsForm";
import BuildProfileForm from "../components/tutor/BuildProfileForm";
import CourseSelectionForm from "../components/parent/CourseSelectionForm";
import AboutForm from "../components/parent/AboutForm";
import PhoneNumberForm from "../components/parent/PhoneNumberForm";
import StudentSignupForm from "../components/parent/StudentSignupForm";
import TimeSlotForm from "../components/parent/TimeSlotForm";
import LessonFrequencyForm from "../components/parent/LessonFrequencyForm";
import ParentSignupForm from "../components/parent/ParentSignupForm";
import '../App.css';

const MultiStepForm = ({ onSubmit, formData, setFormData }) => {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState(null);
  const [userType, setUserType] = useState(null);
  
  

  const [formSubmitted, setFormSubmitted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const calculateProgress = () => {
    const totalSteps = role === "tutor" ? 5 : 6; // Adjusted total steps
    return (step / totalSteps) * 100;
  };

  const handleSubmit = async (e) => {
    console.log("Form Data: ", formData)
    e.preventDefault();
    try {
      await authService.register(formData);
      setStep(step + 1);
      setFormSubmitted(true);
      onSubmit();
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  const handleRoleSelection = (selectedRole) => {
    console.log(selectedRole)
    setRole(selectedRole);
    nextStep();
  };

  const handleUserTypeSelection = (selectedUserType) => {
    setUserType(selectedUserType);
    nextStep();
  };

  let formDisplay = formSubmitted ? (
    <FormDataDisplay formData={formData} prevStep={prevStep} />
  ) : null;

  return (
    <section className="container mt-5">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${calculateProgress()}%` }}
          aria-valuenow={calculateProgress()}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="mt-3 mb-4">
        <h1>Finish signing up for Yotta Academy</h1>
        Step {step} of {role === "tutor" ? 6 : 7}
      </div>

      {step === 0 && <RoleSelection onSelectRole={handleRoleSelection} />}

      {step === 1 && role === "parent-student" && (
        <PhoneNumberForm
          setFormData={setFormData}
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
          onSelectOption={handleUserTypeSelection}
        />
      )}

      {step === 1 && role === "tutor" && (
        <TutorSignupForm
          setFormData={setFormData}
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 2 && role === "tutor" && (
        <SubjectsForm
          setFormData={setFormData}
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && role === "tutor" && (
        <LocationForm
          setFormData={setFormData}
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 4 && role === "tutor" && (
        <QualificationForm
          setFormData={setFormData}
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 5 && role === "tutor" && (
        <BuildProfileForm
          setFormData={setFormData}
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 2 && userType === "parent" && (
        <ParentSignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 2 && userType === "student" && (
        <StudentSignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (userType === "parent" || userType === "student") && (
        <CourseSelectionForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 4 && (userType === "parent" || userType === "student") && (
        <LessonFrequencyForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 5 && (userType === "parent" || userType === "student") && (
        <TimeSlotForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 6 && (userType === "parent" || userType === "student") && (
        <AboutForm
          setFormSubmitted={setFormSubmitted}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {formDisplay}

      {((role === "tutor" && step === 5) ||
        ((userType === "parent" || userType === "student") && step === 7)) && (
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
            onClick={handleSubmit}
            style={{ flex: 1, maxWidth: "130px" }}
          >
            Submit
          </button>
        </div> 
      )}
    </section>
  );
};

export default MultiStepForm;
