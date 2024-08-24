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


import React, { useState } from 'react';
import MultiStepForm from './components/MultiStepForm';
import LandingPage from './components/LandingPage';
import BarDropdown from './components/tutor/BarDropdown';
import TutorSignupForm from './components/tutor/TutorSignupForm';

function App() {
  const [view, setView] = useState("landing"); // State to track the current view

  const handleFormSubmit = () => {
    setView("landing"); // Reset to landing page after form submission
  };

  return (
    <div className="App">
      
      {!formSubmitted ? (
        <MultiStepForm onSubmit={handleFormSubmit} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
