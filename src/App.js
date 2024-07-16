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


import React from 'react';
import MultiStepForm from '../src/components/MultiStepForm';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <MultiStepForm />
    </div>
  );
}

export default App;
