import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-row">

        {/* Brand */}
        <div className="footer-brand">
            
          <strong>SustainX</strong>
          <span>© 2026</span>
        </div>

        {/* Navigation */}
        <ul className="footer-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>

        {/* Social */}
        <div className="footer-social">
          <a href="https://github.com/MayuriBarde/CarbonFootprint" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
