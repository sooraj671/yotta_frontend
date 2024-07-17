import React from 'react';

const FormDataDisplay = ({ formData, prevStep ,nextStep}) => {
  return (
    <section className="container mt-5">
      <header className="mb-4">Review Your Details</header>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <p id="email" className="form-control">{formData.email}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <p id="username" className="form-control">{formData.username}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <p id="firstName" className="form-control">{formData.firstName}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <p id="lastName" className="form-control">{formData.lastName}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <p id="phoneNumber" className="form-control">{formData.phoneNumber}</p>
          </div>
       
         
          <div className="mb-3">
            <label htmlFor="postalCode" className="form-label">Postal Code</label>
            <p id="postalCode" className="form-control">{formData.postalCode}</p>
          </div>
        
          <div className="mb-3">
            <label htmlFor="lessonsPerWeek" className="form-label">Lessons Per Week</label>
            <p id="lessonsPerWeek" className="form-control">{formData.lessonsPerWeek}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="tuitionBudget" className="form-label">Tuition Budget</label>
            <p id="tuitionBudget" className="form-control">{formData.tuitionBudget}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="commitmentLength" className="form-label">Commitment Length</label>
            <p id="commitmentLength" className="form-control">{formData.commitmentLength}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="studentFirstName" className="form-label">Student's First Name</label>
            <p id="studentFirstName" className="form-control">{formData.studentFirstName}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="studentLastName" className="form-label">Student's Last Name</label>
            <p id="studentLastName" className="form-control">{formData.studentLastName}</p>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Student's Gender</label>
            <p className="form-control">{formData.studentGender}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="studentLevel" className="form-label">Student's Level</label>
            <p id="studentLevel" className="form-control">{formData.studentLevel}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="studentGrade" className="form-label">Student's Grade</label>
            <p id="studentGrade" className="form-control">{formData.studentGrade}</p>
          </div>
         
          <div className="mb-3">
            <label htmlFor="tutorGenderPreference" className="form-label">Tutor Gender Preference</label>
            <p id="tutorGenderPreference" className="form-control">{formData.tutorGenderPreference}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="preferredStartDate" className="form-label">Preferred Start Date</label>
            <p id="preferredStartDate" className="form-control">{formData.preferredStartDate}</p>
          </div>
         
          <div className="mb-3">
            <label htmlFor="termsAccepted" className="form-label">Terms Accepted</label>
            <p id="termsAccepted" className="form-control">{formData.termsAccepted ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormDataDisplay;
