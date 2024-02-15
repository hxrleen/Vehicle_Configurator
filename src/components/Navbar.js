import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import additional CSS file for Navbar styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Vehicle Configurator
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
