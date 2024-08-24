import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import MultiStepForm from "./components/MultiStepForm";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import BarDropdown from "./components/tutor/BarDropdown";
import TutorSignupForm from "./components/tutor/TutorSignupForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("landing");

  const handleFormSubmit = () => {
    setView("landing");
  };

  const renderComponent = () => {
    switch (view) {
      case "login":
        return <Login />;
      case "signup":
        return (
          <SignupForm
            formData={{}}
            handleChange={() => {}}
            nextStep={() => {}}
            prevStep={() => {}}
          />
        );
      case "form":
        return <MultiStepForm onSubmit={handleFormSubmit} />;
      default:
        return <LandingPage setView={setView} />;
    }
  };

  return (
    <div className="App page-container">
      <Header />
      <div className="content-wrap">
        {view === "form" ? (
          <MultiStepForm onSubmit={handleFormSubmit} />
        ) : (
          renderComponent()
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
