import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUpload } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

const ParentSignupForm = ({ formData, nextStep, prevStep, setFormData }) => {
  const [experiences, setExperiences] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleExperiencesChange = (event) => {
    setExperiences(event.target.value);
    setFormData({ ...formData, experiences: event.target.value }); // Update formData with experiences
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    // You can handle file upload logic here if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to server)
    formData.uploadedFile = uploadedFile;
    console.log('Form submitted:', formData);
    nextStep();
    // Proceed with next step or other logic as needed
  };

  return (
    <section className="container mt-5">
      <header className="mb-4">Finish signing up for Yotta Academy</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="container mt-5">
          <div className="row">
            {/* Left Portion */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h4>Profile Photo</h4>
              <div className="border rounded p-3 mb-3 d-flex flex-column align-items-center" style={{ width: '100%', height: '200px' }}>
                <FiUser size={50} />
              </div>
              <p>Maximum file size of 3MB. If your file size is too big, try resizing it smaller using paint or use an online image compressor tool. After uploading, you can drag the image to adjust it.</p>
              <button className="btn btn-primary">
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

              <h5 className="fw-bold mt-4">Upload Documents</h5>
              <p>Please upload your documents in the box below.</p>
              <div className="border rounded p-3 d-flex flex-column align-items-center justify-content-center" style={{ height: '150px', borderStyle: 'dotted' }}>
                {uploadedFile && <p>Uploaded File: {uploadedFile.name}</p>}
                <button className="btn btn-secondary mt-3">
                  <FaUpload className="me-2" />
                  Upload Documents
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ParentSignupForm;
