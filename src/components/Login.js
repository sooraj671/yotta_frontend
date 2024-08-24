import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Login = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic
    onSubmit(); // Move to the next step or page
  };

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
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "30%", marginTop: "40%" }}
        >
          Log In
        </button>
      </form>
    </section>
  );
};

export default Login;
