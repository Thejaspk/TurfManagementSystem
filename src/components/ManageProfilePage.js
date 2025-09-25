import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ManageProfilePage.css";

function ManageProfilePage() {
  const navigate = useNavigate();

  // Dummy user data (in real app, fetch from backend)
  const [profile, setProfile] = useState({
    username: "john_doe",
    email: "john@example.com",
    phone: "9876543210",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
    navigate("/home"); // go back to home after saving
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2 className="profile-title">Manage Profile</h2>
        <form className="profile-form" onSubmit={handleSave}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            required
          />

          <button type="submit" className="profile-button">
            Save Changes
          </button>
        </form>
        <button className="back-button" onClick={() => navigate("/home")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ManageProfilePage;
