import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetail from "./pages/MovieDetail";
import UserPage from "./pages/UserPage";

const App = () => {
    const handleLogin = (userData) => {
        console.log("User logged in:", userData);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
        </Router>
    );
};


export default App;
