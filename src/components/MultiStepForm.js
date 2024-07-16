import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentSignupForm from './ParentSignupForm';
import StudentSignupForm from './StudentSignupForm';
import TimeSlotForm from './TimeSlotForm';
import LessonFrequencyForm from './LessonFrequencyForm';
import CourseSelectionForm from './CourseSelectionForm';
import AboutForm from './AboutForm';
import SignupForm from './SignupForm';
import PhoneNumberForm from './PhoneNumberForm';
import authService from '../services/authService'; // Import authService for handling registration logic

const MultiStepForm = () => {
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
    lessonFrequency: '3',
    lessonsPerWeek: '',
    tuitionBudget: '',
    tutorGenderPreference: '',
    preferredStartDate: '',
    commitmentLength: '',
    termsAccepted: true
  });

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
    return ((step - 1) / 7) * 100; // Assuming there are 7 steps
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Combine all form data
      const userData = {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        parentLastName: formData.parentLastName,
        parentEmail: formData.parentEmail,
        postalCode: formData.postalCode,
        studentFirstName: formData.studentFirstName,
        studentLastName: formData.studentLastName,
        studentGender: formData.studentGender,
        studentPostalCode: formData.studentPostalCode,
        studentLevel: formData.studentLevel,
        studentGrade: formData.studentGrade,
        lessonFrequency: formData.lessonFrequency,
        lessonsPerWeek: formData.lessonsPerWeek,
        tuitionBudget: formData.tuitionBudget,
        tutorGenderPreference: formData.tutorGenderPreference,
        preferredStartDate: formData.preferredStartDate,
        commitmentLength: formData.commitmentLength,
        termsAccepted: formData.termsAccepted
      };

      // Call authService.register to attempt user registration
      const response = await authService.register(userData);
      console.log('Registration successful', response);
      // Redirect to login page upon successful registration
      // (You may need to import 'navigate' from your routing library if not using React Router)
      // navigate('/login');
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error.response.data);
      // Assuming authService returns an error with a 'message' property
      // setError(error.response.data.message);
    }
  };

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
      {/* Submission Button */}
      {step === 8 && (
        <div className="mt-3">
          <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>Previous</button>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </section>
  );
};

export default MultiStepForm;
