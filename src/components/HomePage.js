import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import turfLogo from "../images/kindpng_3887261.png";

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session or token if any
    navigate("/"); // redirect to login
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <img src={turfLogo} alt="Turf Logo" className="turf-logo" />
        <h1>Turf Booking System</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="home-main">
        <h2>Welcome to Turf Booking System!</h2>
        <p>Book your favorite turf quickly and easily.</p>

        <div className="action-cards">
          <div className="card">
            <h3>Book a Turf</h3>
            <p>Choose your preferred turf and time slot.</p>
            <button className="card-button">Book Now</button>
          </div>
          <div className="card">
            <h3>View Bookings</h3>
            <p>Check your upcoming turf bookings.</p>
            <button className="card-button">View</button>
          </div>
          <div className="card">
            <h3>Manage Profile</h3>
            <p>Update your account information.</p>
            <button className="card-button">Profile</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
