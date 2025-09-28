import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import HomePage from "./components/HomePage";
import TurfBookingPage from "./components/TurfBookingPage";
import ViewBookingsPage from "./components/ViewBookingsPage";
import ManageProfilePage from "./components/ManageProfilePage";
import ResetPasswordPage from "./components/ResetPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/turf-booking-page" element={<TurfBookingPage />} />
        <Route path="/home/view-booking-page" element={<ViewBookingsPage />} />
        <Route
          path="/home/manage-profile-page"
          element={<ManageProfilePage />}
        />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
