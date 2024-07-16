import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentSignupForm from '../components/parent/ParentSignupForm';
import StudentSignupForm from '../components/parent/StudentSignupForm';
import TimeSlotForm from '../components/parent/TimeSlotForm';
import LessonFrequencyForm from '../components/parent/LessonFrequencyForm';
import TutorSignupForm from '../components/tutor/TutorSignupForm';
import LocationForm from '../components/tutor/LocationForm';
import QualificationForm from '../components/tutor/QualificationForm';
import SubjectsForm from '../components/tutor/SubjectsForm';
import BuildProfileForm from '../components/tutor/BuildProfileForm';
import CourseSelectionForm from '../components/parent/CourseSelectionForm';
import AboutForm from '../components/parent/AboutForm';
import SignupForm from './SignupForm';
import PhoneNumberForm from '../components/parent/PhoneNumberForm';
import FormDataDisplay from './FormDataDisplay'; // Import FormDataDisplay component
import RoleSelection from './RoleSelection'; // Import RoleSelection component
import authService from '../services/authService';
import ParentOrStudentSelection from '../components/parent/ParentOrStudentSelection'; // Import ParentOrStudentSelection component


const MultiStepForm = ({ onSubmit }) => {
  const [step, setStep] = useState(0); // Initialize step to 0 for role selection
  const [role, setRole] = useState(null); // State to store selected role
  const [userType, setUserType] = useState(null); // State to store if user is parent or student
  const [formData, setFormData] = useState({
    email: 'email@gmail.com',
    username: 'sooraj',
    password: 'sooraj',
    firstName: 'sooraj',
    lastName: 'sooraj',
    phoneNumber: '1212',
    parentLastName: 'john',
    parentEmail: 'john@gmail.com',
    postalCode: '123',
    studentFirstName: 'sooraj',
    studentLastName: 'kumar',
    studentGender: 'male',
    studentPostalCode: '123',
    studentLevel: 'Option 1',
    studentGrade: 'Option 1',
    lessonFrequency: 'Ten',
    lessonsPerWeek: 'Five',
    tuitionBudget: '2000',
    tutorGenderPreference: 'A',
    preferredStartDate: '2023-12-12',
    commitmentLength: '3 Months',
    termsAccepted: true
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const calculateProgress = () => {
    const totalSteps = role === 'tutor' ? 5 : 7; // Adjust total steps based on role
    return ((step - 1) / totalSteps) * 100;
  };

  const handleSubmit = async e => {
    setStep(step + 1);
    setFormSubmitted(true); // Set formSubmitted to true upon successful submission
    onSubmit(); // Notify parent component of successful form submission
  };

  const handleRoleSelection = selectedRole => {
    setRole(selectedRole);
    nextStep();
  };

  const handleUserTypeSelection = selectedUserType => {
    setUserType(selectedUserType);
    nextStep();
  };

  // Render FormDataDisplay if form has been successfully submitted
  let formDisplay = null;
  if (formSubmitted) {
    formDisplay = (
      <FormDataDisplay
        formData={formData}
        prevStep={prevStep} // Ensure prevStep is passed to FormDataDisplay
      />
    );
  }

  // Render form steps if form submission not yet completed
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
        Step {step} of {role === 'tutor' ? 6 : 8}
      </div>
      {/* Conditional rendering of form steps */}
      {step === 0 && <RoleSelection onSelectRole={handleRoleSelection} />}
     
      {step === 1  && (
        <SignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
       {step === 2 && role === 'parent-student' && (
        <ParentOrStudentSelection onSelectOption={handleUserTypeSelection} />
      )}
      {step === 2 && role === 'tutor' && (
        <TutorSignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && role === 'tutor' && (
        <SubjectsForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && role === 'tutor' && (
        <LocationForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && role === 'tutor' && (
        <QualificationForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 6 && role === 'tutor' && (
        <BuildProfileForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && userType === 'parent' && (
        <ParentSignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}

        />
      )}
      {step === 3 && userType === 'student' && (
        <StudentSignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (userType === 'parent' || userType === 'student') && (
        <CourseSelectionForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && (userType === 'parent' || userType === 'student') && (
        <LessonFrequencyForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 6 && (userType === 'parent' || userType === 'student') && (
        <TimeSlotForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 7 && (userType === 'parent' || userType === 'student') && (
        <LessonFrequencyForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 8 && (userType === 'parent' || userType === 'student') && (
        <AboutForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 9 && (userType === 'parent' || userType === 'student') && (
        <FormDataDisplay
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      )}

      {/* Render FormDataDisplay if form has been submitted */}
      {formDisplay}

      {/* Submission Button */}
      {step >= (role === 'tutor' ? 6 : 8) && (
        <div className="mt-3">
          <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
            Previous
          </button>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </section>
  );
};

export default MultiStepForm;
