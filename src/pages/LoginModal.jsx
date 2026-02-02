import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content login-card">

          {/* MODAL HEADER */}
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              🌱 Carbon Footprint Tracker
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* MODAL BODY */}
          <div className="modal-body">
            <p className="subtitle text-center">
              Login to reduce your carbon impact
            </p>

            <form onSubmit={handleLogin}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="btn btn-success w-100">
                Login
              </button>
            </form>

            <div className="links text-center mt-3">
              <a href="#" className="d-block mb-2">
                Forgot Password?
              </a>
              <p>
                Not registered?{" "}
                <button
                    className="btn btn-link p-0"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                    data-bs-dismiss="modal"
                    >
                    Create an account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
