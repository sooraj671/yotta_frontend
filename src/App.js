import React, { useState } from "react";
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
    studentGrade: '',
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
    termsAccepted: true
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
    setView("tutor");}
    

  const handleFormSubmit = () => {
    setView("landing");
  };

  const renderComponent = () => {
    console.log("Current View:", view); // Debugging
    switch (view) {
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
            prevStep={() => setView("landing")}
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


       {/* <Dashboard></Dashboard>  */}
      <TopHeader setView={setView}></TopHeader>
      <div className="content-wrap">{renderComponent()}</div>
      <Footer></Footer>
    </div>
  );
}
export default App;
