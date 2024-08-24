import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import MultiStepForm from "./components/MultiStepForm";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("landing");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    termsAccepted: false,
  });

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignupSubmit = () => {
    setView("form"); // Move to MultiStepForm
  };

  const handleLoginSubmit = () => {
    setView("form"); // Move to MultiStepForm
  };

  const renderComponent = () => {
    console.log("Current View:", view); // Debugging
    switch (view) {
      case "login":
        return <Login onSubmit={handleLoginSubmit} />;
      case "signup":
        return (
          <SignupForm
            formData={formData}
            handleChange={handleFormChange}
            nextStep={handleSignupSubmit}
            prevStep={() => setView("landing")}
          />
        );
      case "form":
        return <MultiStepForm onSubmit={() => setView("landing")} />;
      default:
        return <LandingPage setView={setView} />;
    }
  };

  return (
    <div className="App page-container">
      <Header />
      <div className="content-wrap">{renderComponent()}</div>
      <Footer />
    </div>
  );
}

export default App;
