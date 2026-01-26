import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-light">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0">
          <h5 className="mb-0">EcoTracker</h5>
          <small>© 2026 All rights reserved.</small>
        </div>

        <ul className="list-unstyled d-flex mb-3 mb-md-0">
          <li className="mx-2">
            <a href="/" className="text-light text-decoration-none">
              Home
            </a>
          </li>
          <li className="mx-2">
            <a href="/about" className="text-light text-decoration-none">
              About
            </a>
          </li>
          <li className="mx-2">
            <a href="/learn" className="text-light text-decoration-none">
              Learn
            </a>
          </li>
          <li className="mx-2">
            <a href="/contact" className="text-light text-decoration-none">
              Contact
            </a>
          </li>
        </ul>

        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
