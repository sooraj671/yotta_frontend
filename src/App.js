import React, { useState,useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import LandingPage from "./components/LandingPage";
import MultiStepForm from "./components/MultiStepForm";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import SignupForm from "./components/SignupForm";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import TutorProfile from "./components/profile/TutorProfile"

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("tutor");

  useEffect(() => {

    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setView(event.state.view); // Restore the view based on the history state
      } else {
        setView("landing"); // Default to landing page if no state is available
      }
    };
  
    window.addEventListener("popstate", handlePopState);
  
    return () => {
      window.removeEventListener("popstate", handlePopState); // Cleanup on unmount
    };

    const checkLoggedIn = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Validate the token (you can also do this in the backend)
          const response = await fetch('/auth/verify-token', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.ok) {
            // Token is valid, set the user as logged in
            setIsLoggedIn(true);
            setView("dashboard");
          } else {
            // Token is invalid, clear local storage
            localStorage.removeItem('token');
            setIsLoggedIn(false);
          }
        } catch (error) {
          localStorage.removeItem('token');
          setIsLoggedIn(false);
        }
      }
    };
  
    checkLoggedIn();
  }, []);
  
  const [view, setView] = useState("landing");

  const [formData, setFormData] = useState({
    userId:'',
    document:'',
    profilePhoto:'',
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    parentLastName: '',
    parentEmail: '',
    postalCode: '',
    studentFirstName: '',
    studentLastName: '',
    studentGender: '',
    studentPostalCode: '',
    studentLevel: '',
    grade: '',
    lessonFrequency: '',
    lessonsPerWeek: '',
    tuitionBudget: '',
    tutorGenderPreference: '',
    preferredStartDate: '',
    commitmentLength: '',
    dropDownData:[],
    educationDetails : [],
    expectations: '',
    specialNeeds: '',
    preferredLocations: '',
    educationLevel:'',
    experiences:'',
    tutorCategory:'',
    race: '',
    gender: '',
    courses: [],
    termsAccepted: true,
    levels: [],
    expectationsAndNeeds: '',
    selectedCourses: [],
    tutionBudget: ''
  });

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignupSubmit = () => {
    handleViewChange("form"); // Move to MultiStepForm
  };

  const handleLoginSubmit = (role) => {
    setRole(role);
    handleViewChange("dashboard");
  }
    

  const handleFormSubmit = () => {
    setView("landing");
  };

  const handleViewChange = (newView) => {
    setView(newView);
    window.history.pushState({ view: newView }, "", `#${newView}`); // Update the URL with a hash fragment
  };
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    setView("landing");

  };
  

  const renderComponent = () => {
    switch (view) {
      case "dashboard":
        return <Dashboard role={role} />;
      case "tutor":
        return <TutorProfile />;
      case "login":
        return <Login handleChange={handleFormChange} formData={formData} onSubmit={handleLoginSubmit} />;
      case "signup":
        return (
          <SignupForm
            formData={formData}
            handleChange={handleFormChange}
            nextStep={handleSignupSubmit}
          prevStep={() => handleViewChange("landing")}
          />
        );
      case "form":
        return <MultiStepForm formData={formData} setFormData={setFormData} onSubmit={() => setView("login")} />;
      default:
        return <LandingPage  />;
    }
  };

  return (
    <div className="App page-container">
      <TopHeader view={view} setView={setView} handleLogout={handleLogout}></TopHeader>
      <div className="content-wrap">{renderComponent()}</div>
      <Footer></Footer> 
    </div>
  );
}
export default App;
