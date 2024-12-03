import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/user">User</Link>
    </nav>
);

export default Navbar;
