// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Register from './components/Register';
// import Login from './components/Login';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

import React, { useState } from "react";
import LandingPage from "./components/LandingPage"; // Import the LandingPage component
import MultiStepForm from "./components/MultiStepForm"; // Import the MultiStepForm component
import Login from "./components/Login"; // Import Login component
import SignupForm from "./components/SignupForm"; // Import SignupForm component
import BarDropdown from "./components/tutor/BarDropdown";
import TutorSignupForm from "./components/tutor/TutorSignupForm";

function App() {
  const [view, setView] = useState("landing"); // State to track the current view

  const handleFormSubmit = () => {
    setView("landing"); // Reset to landing page after form submission
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

  return <div className="App">{renderComponent()}</div>;
}

export default App;
