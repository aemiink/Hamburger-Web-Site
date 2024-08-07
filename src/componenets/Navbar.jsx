import React from 'react';
import Logo from '../assets/delicious.png'
import {NavLink} from "react-router-dom";
import '../styles/navbar.css'


function Navbar() {
    return (
        <nav className="navbar">
            <div className="main">
                <img src={Logo} alt="Hamburger Logo" width="150px"/>
            </div>
            <div className="navbar-links">
                <NavLink to='/'> Home </NavLink>
                <NavLink to='/menu'> Menu </NavLink>
                <NavLink to='/about'> About Us </NavLink>
                <NavLink to='/contact'> Contact </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;