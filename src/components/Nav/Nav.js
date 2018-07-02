import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () =>
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
            <p id="logo" className={window.location.pathname === "/" ? "active" : ""}>
                <Link className="logo" to="/"><img className="logoImg img-responsive" src="assets/img/logo.png" alt="cook"/></Link>
            </p>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className={window.location.pathname === "/about" ? "active" : ""}>
                        <Link className="aboutLink" to="/About">About</Link>
                    </li>
                    <li className={window.location.pathname === "contact" ? "active" : ""}>
                        <Link className="contactLink" to="/Contact">Contact</Link>
                    </li>
                    <li className={window.location.pathname === "register" ? "active" : ""}>
                        <Link className="registerLink" to="/Register">Register</Link>
                    </li>
                    <li className={window.location.pathname === "login" ? "active" : ""}>
                        <Link className="loginLink" to="/Login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    export default Nav;