import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Ensure this file has no conflicting styles
import authService from "../services/authService";


const SignupForm = ({ formData, handleChange, nextStep }) => {
  const [error, setError] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form data if needed
    try {
      const response = await authService.signup(formData);
      formData.userId = response.userId;
      console.log("Form submitted:", formData);
      nextStep(); // Move to the next step
    } catch (error) {
      setError(error)
      console.error("Error during form submission:", error);
    }
  };

  return (
    <section className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4">Sign up for Yotta Academy</h1>
      </header>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <a
          href="#"
          className="google-signup-button d-flex align-items-center justify-content-center mb-4"
          style={{
            textDecoration: "none",
            backgroundColor: "black",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <img
            src="https://banner2.cleanpng.com/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg"
            alt="Google logo"
            style={{ width: "24px", height: "24px", marginRight: "5px" }}
          />
          <span>Sign Up with Google</span>
        </a>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
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
            placeholder="Choose a username"
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
            placeholder="Enter your password"
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
      

{/* {error !== '' &&(
       
       <div><p>Error while sign up</p></div>
      )} */}

        <div className="d-flex flex-column align-items-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "60%",
              maxWidth: "130px",
              padding: "5px",
              marginBottom: "12px",
              fontSize: "1.5rem",
            }}
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignupForm;
