import React, { useState } from "react";
import "./Login.css";

const RegisterModal = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div
      className="modal fade"
      id="registerModal"
      tabIndex="-1"
      aria-labelledby="registerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content login-card">

          {/* HEADER */}
          <div className="modal-header">
            <h5 className="modal-title" id="registerModalLabel">
              🌱 Create Account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* BODY */}
          <div className="modal-body">
            <p className="subtitle text-center">
              Join us and start reducing your carbon footprint
            </p>

            <form onSubmit={handleRegister}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button type="submit" className="btn btn-success w-100">
                Register
              </button>
            </form>

            <div className="links text-center mt-3">
              <p>
                Already registered?{" "}
                <button
                  className="btn btn-link p-0"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  data-bs-dismiss="modal"
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
