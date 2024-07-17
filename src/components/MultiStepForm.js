import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDataDisplay from './FormDataDisplay';
import RoleSelection from './RoleSelection';
import authService from '../services/authService';
import ParentOrStudentSelection from '../components/parent/ParentOrStudentSelection';
import TutorSignupForm from '../components/tutor/TutorSignupForm';
import LocationForm from '../components/tutor/LocationForm';
import QualificationForm from '../components/tutor/QualificationForm';
import SubjectsForm from '../components/tutor/SubjectsForm';
import BuildProfileForm from '../components/tutor/BuildProfileForm';
import CourseSelectionForm from '../components/parent/CourseSelectionForm';
import AboutForm from '../components/parent/AboutForm';
import SignupForm from './SignupForm';
import PhoneNumberForm from '../components/parent/PhoneNumberForm';
import StudentSignupForm from '../components/parent/StudentSignupForm';
import TimeSlotForm from '../components/parent/TimeSlotForm';
import LessonFrequencyForm from '../components/parent/LessonFrequencyForm';
import ParentSignupForm from '../components/parent/ParentSignupForm';

const MultiStepForm = ({ onSubmit }) => {
  const [step, setStep] = useState(0); // Initialize step to 0 for role selection
  const [role, setRole] = useState(null); // State to store selected role
  const [userType, setUserType] = useState(null); // State to store if user is parent or student
  const [formData, setFormData] = useState({
    dropDownData:[],
    educationDetails : [],
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    expectations: '',
    phoneNumber: '',
    postalCode: '',
    studentFirstName: '',
    studentLastName: '',
    studentGender: '',
    studentLevel: '',
    studentGrade: '',
    lessonsPerWeek: '',
    tuitionBudget: '',
    tutorGenderPreference: '',
    preferredStartDate: '',
    commitmentLength: '',
    specialNeeds: '',
    preferredLocations: '',
    educationLevel:'',
    experiences:'',
    tutorCategory:'',
    race: '',
    gender: '',
    courses: [],
    termsAccepted: true
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const calculateProgress = () => {
    const totalSteps = role === 'tutor' ? 5 : 8; // Adjust total steps based on role
    return ((step - 1) / totalSteps) * 100;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await authService.register(formData);
      setStep(step + 1);
      setFormSubmitted(true); // Set formSubmitted to true upon successful submission
      onSubmit(); // Notify parent component of successful form submission
    } catch (error) {
      console.error('Error during form submission:', error);
      // Handle the error as needed, e.g., show an error message to the user
    }
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
      {step === 1 && (
        <SignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 2 && role === 'parent-student' && (
         <PhoneNumberForm
         setFormData={setFormData} // Pass setFormData function to update formData

         nextStep={nextStep}
         formData={formData}
         handleChange={handleChange}
         onSelectOption={handleUserTypeSelection}
       />
      )}
      {step === 2 && role === 'tutor' && (
        <TutorSignupForm
          setFormData={setFormData} // Pass setFormData function to update formData
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && role === 'tutor' && (
        <SubjectsForm
        setFormData={setFormData} // Pass setFormData function to update formData
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && role === 'tutor' && (
        <LocationForm
        setFormData={setFormData} // Pass setFormData function to update formData

          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && role === 'tutor' && (
        <QualificationForm
        setFormData={setFormData} // Pass setFormData function to update formData

          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 6 && role === 'tutor' && (
        <BuildProfileForm
        setFormData={setFormData} // Pass setFormData function to update formData

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
          setFormData={setFormData} // Pass setFormData function to update formData
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && (userType === 'parent' || userType === 'student') && (
        <LessonFrequencyForm
          formData={formData}
          setFormData={setFormData} // Pass setFormData function to update formData
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 6 && (userType === 'parent' || userType === 'student') && (
        <TimeSlotForm
          formData={formData}
          setFormData={setFormData} // Pass setFormData function to update formData
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
     
      {step === 7 && (userType === 'parent' || userType === 'student') && (
        <AboutForm
          formData={formData}
          setFormData={setFormData} // Pass setFormData function to update formData
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 8 && (userType === 'parent' || userType === 'student') && (
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
