import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

function Navbar({ isLoggedIn, handleLogout }){

    // // Logout handler
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setUsername('');
  // };
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt='logo' />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/user">User</Link></li>
                </ul>
            </div>
            
            {isLoggedIn && (
                <button className="logout" onClick={handleLogout}>
                    Logout
                </button>
            )}
        </nav>
    );
};

export default Navbar;