import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; // Import BrowserRouter as Router and Routes
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

// Custom PrivateRoute component for access control
// Function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/products" 
          element={
            <ProtectedRoute>
              <Productpage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

// const App = () => {
//   return (
//     <Router>
//         {/* Public routes */}
//         <Route path="/" element={<Homepage />} />
//         {/* <Route path="/products" element={<Productpage />} /> */}
//         <Route path="/login" element={<LoginPage />} />   
    
//         {/* Private routes */}
//         <ProtectedRoute path="/products" element={<Productpage />} />
        
//         {/* Default route */}
//         {/* <Redirect to="/login" /> */}
//     </Router>
//   );
// };
export default App;
