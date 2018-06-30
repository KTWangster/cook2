import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () =>
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Cooky App</a>
        </div>
        <ul className="nav navbar-nav">
        <li className={window.location.pathname === "/about" ? "active" : ""}>
            <Link className="aboutLink" to="/About">About</Link>
        </li>
        <li className={window.location.pathname === "register" ? "active" : ""}>
          <Link className="registerLink" to="/Register">Register</Link>
        </li>
        <li className={window.location.pathname === "login" ? "active" : ""}>
          <Link className="loginLink" to="/Login">Login</Link>
        </li>
        </ul>
    </nav>

    export default Nav;