import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPasswordPage.css";
import turfLogo from "../images/kindpng_3887261.png"; // same logo as login page

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset email:", email);
    alert("Password reset link sent to your email!");
    navigate("/"); // redirect back to login page
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <img src={turfLogo} alt="Turf Logo" className="turf-logo" />
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtitle">
          Enter your registered email to reset your password.
        </p>
        <form className="forgot-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forgot-input"
            required
          />
          <button type="submit" className="forgot-button">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
