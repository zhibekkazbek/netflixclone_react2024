import React, {useState} from 'react';
import './App.css';
// import {} from 'antd';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

// 84c422344de14c64664385e01881c87b api

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    // Function to simulate login (You can change it to real logic later)
    const handleLogin = () => {
      setIsAuthenticated(true);
    };
  
    return (
      <Router>
        <Routes>
          {/* Default route to Login page */}
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
  
          {/* Protected route for Home page */}
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <HomePage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
  
          {/* Redirect from root to login if not authenticated */}
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </Router>
    );

};

export default App;
