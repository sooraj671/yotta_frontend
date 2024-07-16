import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentSignupForm from '../components/parent/ParentSignupForm';
import StudentSignupForm from '../components/parent/StudentSignupForm';
import TimeSlotForm from '../components/parent/TimeSlotForm';
import LessonFrequencyForm from '../components/parent/LessonFrequencyForm';
import CourseSelectionForm from '../components/parent/CourseSelectionForm';
import AboutForm from '../components/parent/AboutForm';
import SignupForm from './SignupForm';
import PhoneNumberForm from '../components/parent/PhoneNumberForm';
import FormDataDisplay from './FormDataDisplay'; // Import FormDataDisplay component
import authService from '../services/authService';

const MultiStepForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
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
    return ((step - 1) / 8) * 100; // Assuming there are 8 steps
  };

  const handleSubmit = async e => {
    setStep(step + 1);
    setFormSubmitted(true); // Set formSubmitted to true upon successful submission
    onSubmit(); // Notify parent component of successful form submission
    // e.preventDefault();
    // try {
    //   // Combine all form data
    //   const userData = {
    //     email: formData.email,
    //     username: formData.username,
    //     password: formData.password,
    //     firstName: formData.firstName,
    //     lastName: formData.lastName,
    //     phoneNumber: formData.phoneNumber,
    //     parentLastName: formData.parentLastName,
    //     parentEmail: formData.parentEmail,
    //     postalCode: formData.postalCode,
    //     studentFirstName: formData.studentFirstName,
    //     studentLastName: formData.studentLastName,
    //     studentGender: formData.studentGender,
    //     studentPostalCode: formData.studentPostalCode,
    //     studentLevel: formData.studentLevel,
    //     studentGrade: formData.studentGrade,
    //     lessonFrequency: formData.lessonFrequency,
    //     lessonsPerWeek: formData.lessonsPerWeek,
    //     tuitionBudget: formData.tuitionBudget,
    //     tutorGenderPreference: formData.tutorGenderPreference,
    //     preferredStartDate: formData.preferredStartDate,
    //     commitmentLength: formData.commitmentLength,
    //     termsAccepted: formData.termsAccepted
    //   };

    //   // Call authService.register to attempt user registration
    //   const response = await authService.register(userData);
    //   console.log('Registration successful', response);
     
    // } catch (error) {
    //   console.error('Registration error:', error.response.data);
    //   // Handle registration error
    // }
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
        Step {step} of 8
      </div>
      {/* Conditional rendering of form steps */}
      {step === 1 && (
        <SignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <PhoneNumberForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <StudentSignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <ParentSignupForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && (
        <CourseSelectionForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 6 && (
        <LessonFrequencyForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 7 && (
        <TimeSlotForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 8 && (
        <AboutForm
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      )}
      
      {/* Render FormDataDisplay if form has been submitted */}
      {formDisplay}

      {/* Submission Button */}
      {step >= 8  && (
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
