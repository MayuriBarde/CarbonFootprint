import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/src/assets/logo.png" alt="Logo" width="40" />
          SustainX
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/learn">
                Learn
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/history">
                History
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/calculator">
                Calculator
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">
                Reports
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
