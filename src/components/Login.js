import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import authService from "../services/authService";

const Login = ({ formData, onSubmit, handleChange }) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform login logic
    // onSubmit(); 
    console.log("Form submitted:", formData);

    try {
      await authService.login(formData);
      const role = formData.email == "sooraj@gmail.com" ? "Student" : "Tutor" ;
      // setStep(step + 1);
      // setFormSubmitted(true);
      onSubmit(role);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  }

  return (
    <section className="container mt-5">
      <header className="mb-4">Log in to Yotta Academy</header>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{ width: "30%", margin: "0 auto" }}
      >
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            placeholder=""
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "30%", marginTop: "10%" }}
        >Login</button>
      </form>
    </section>
  );
};

export default Login;
