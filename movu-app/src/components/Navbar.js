import { React } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import home from '../assets/bx_home-alt-2.svg'
import movies from '../assets/mdi_movie-open-outline.svg'
import user from '../assets/Vector.svg'
import logout from '../assets/circum_logout.svg'
import './components.css';
const Navbar = () => {

   return(
    <div className="navbar">
        <div className="navbar-wrapper">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="menu">
                <Link to="/home" className="active"><img src={home} alt="icon"/> Home</Link>
                <Link to="/"><img src={movies} alt="icon"/> Movies</Link>
                <Link to="/"><img src={user} alt="icon"/> User</Link>
            </div>
        </div>

        <Link to="/" className="logout"><img src={logout} alt="icon"/> Logout</Link>
    </div>
   )
}

export default Navbar;