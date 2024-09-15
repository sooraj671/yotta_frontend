import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUpload } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import authService from '../../services/authService'; // Assuming you have an auth service to upload files.

const ParentSignupForm = ({ formData, nextStep, prevStep, setFormData }) => {
  const [uploadedProfilePhoto, setUploadedProfilePhoto] = useState(null);
  const [uploadedDocuments, setUploadedDocuments] = useState(null);
  const [previewProfilePhoto, setPreviewProfilePhoto] = useState(null);

  // Handle experiences change
  const handleExperiencesChange = (event) => {
    setFormData({ ...formData, experiences: event.target.value });
  };

  // Handle profile photo upload
  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0];
    setUploadedProfilePhoto(file);
    setFormData({ ...formData, profilePhoto: file });

    // Create a preview URL for the image
    setPreviewProfilePhoto(URL.createObjectURL(file));
  };

  // Handle document upload
  const handleDocumentsUpload = (event) => {
    const file = event.target.files[0];
    setUploadedDocuments(file);
    setFormData({ ...formData, uploadedDocuments: file });
  };

  // Handle form submit logic
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Submit the form data and files
      const data = new FormData();
      data.append('profilePhoto', uploadedProfilePhoto);
      data.append('document', uploadedDocuments);
      data.append('experiences', formData.experiences);
      
      // Assuming authService.uploadDocuments is the API that handles file uploads
      await authService.uploadDocuments(data);

      console.log('Form submitted with files:', formData);
      nextStep(); // Proceed to the next step
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <section className="container mt-5">
      <form onSubmit={handleSubmit} className="form">
        <div className="container mt-5">
          <div className="row">
            {/* Left Portion */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h4>Profile Photo</h4>
              <div className="border rounded p-3 mb-3 d-flex flex-column align-items-center" style={{ width: '100%', height: '200px' }}>
                {previewProfilePhoto ? (
                  <img
                    src={previewProfilePhoto}
                    alt="Profile Preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <FiUser size={50} />
                )}
              </div>
              <p>Maximum file size of 3MB. Resize if needed.</p>
              <input type="file" accept="image/*" onChange={handleProfilePhotoUpload} className="mb-3" />
              <button type="button" className="btn btn-primary" onClick={() => document.querySelector("input[type='file']").click()}>
                <FaUpload className="me-2" />
                Upload Photo
              </button>
            </div>

            {/* Right Portion */}
            <div className="col-md-8">
              <h4>Experiences</h4>
              <textarea
                className="form-control w-100"
                placeholder={`A better portfolio increases your chance of getting assignments. \nHere are some things you can include:\n• Years of tutoring experience, number of students taught and their grade improvements\n• Relevant subject grades in various academic institutions\n• Academic achievements (i.e. Dean’s list, Scholarship etc.)\n• Other teaching experiences (i.e. relief teaching, tuition centre etc.)`}
                style={{ resize: 'none', height: '200px' }}
                value={formData.experiences}
                onChange={handleExperiencesChange}
              ></textarea>

              <h4 className="fw-bold mt-4">Upload Documents</h4>
              <p>Please upload your documents in the box below.</p>
              <div className="border rounded p-3 d-flex flex-column align-items-center justify-content-center" style={{ height: '150px', borderStyle: 'dotted' }}>
                {uploadedDocuments && <p>Uploaded Document: {uploadedDocuments.name}</p>}
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleDocumentsUpload} className="mb-3" />
                <button type="button" className="btn btn-secondary" onClick={() => document.querySelector("input[type='file']").click()}>
                  <FaUpload className="me-2" />
                  Upload Documents
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button type="button" className="btn btn-secondary me-3" onClick={prevStep}>
              Previous
            </button>
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ParentSignupForm;
