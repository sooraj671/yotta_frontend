import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const SignupForm = ({ formData, handleChange, nextStep, prevStep }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data if needed
    console.log("Form submitted:", formData);
    nextStep(); // Move to the next step
  };

  return (
    <section className="container mt-5">
      <header className="mb-4">Sign up for Yotta Academy</header>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ width: "30%", margin: "0 auto" }}
      >
        <a href="#" className="google-signup-button">
          <img
            src="https://banner2.cleanpng.com/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg"
            alt="Google logo"
            className="me-2"
          />
          Sign Up with Google
        </a>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            placeholder=""
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            name="termsAccepted"
            type="checkbox"
            id="acceptTerms"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="acceptTerms">
            I agree and accept the <a href="#">terms and conditions</a>
          </label>
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "30%", marginTop: "40%" }}
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
