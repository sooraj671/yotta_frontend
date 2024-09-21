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

  useEffect(() => {
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
    termsAccepted: true,
    levels: [],
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
    setView("dashboard");}
    

  const handleFormSubmit = () => {
    setView("landing");
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    setView("landing");

  };
  

  const renderComponent = () => {
    console.log("Current View:", view); // Debugging
    switch (view) {
      case "dashboard":
        return <Dashboard />;
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
      <TopHeader view={view} setView={setView} handleLogout={handleLogout}></TopHeader>
      <div className="content-wrap">{renderComponent()}</div>
     <Footer></Footer> 
    </div>
  );
}
export default App;
