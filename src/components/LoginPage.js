import React, { useState } from "react";
import "../styles/LoginPage.css";
import turfLogo from "../images/kindpng_3887261.png"; // Turf logo
import { useNavigate } from "react-router-dom"; // <-- useNavigate
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // <-- hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // call API Gateway login endpoint
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          username,
          password,
        }
      );

      // JWT returned by User Service through Gateway
      const token = response.data.token;

      // save token in localStorage for later requests
      localStorage.setItem("jwtToken", token);

      alert("Login successful!");
      navigate("/home"); // redirect to home page
    } catch (error) {
      console.error(error);
      alert("Invalid username or password");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={turfLogo} alt="Turf Logo" className="turf-logo" />
        <h2 className="login-title">Turf Booking System</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </div>
      <div className="floating-ball"></div>
    </div>
  );
}

export default LoginPage;
