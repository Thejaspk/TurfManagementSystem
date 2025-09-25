import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TurfBookingPage.css";

function TurfBookingPage() {
  const navigate = useNavigate();

  const [selectedTurf, setSelectedTurf] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const turfs = ["Green Field", "Sunny Turf", "Pro Arena", "Grassland Turf"];
  const slots = [
    "6 AM - 8 AM",
    "8 AM - 10 AM",
    "10 AM - 12 PM",
    "4 PM - 6 PM",
    "6 PM - 8 PM",
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking Details:", {
      selectedTurf,
      selectedDate,
      selectedSlot,
    });
    alert(
      `Turf booked!\nTurf: ${selectedTurf}\nDate: ${selectedDate}\nSlot: ${selectedSlot}`
    );
    navigate("/home"); // go back to home after booking
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h2 className="booking-title">Book a Turf</h2>
        <form className="booking-form" onSubmit={handleBooking}>
          <label>Select Turf:</label>
          <select
            value={selectedTurf}
            onChange={(e) => setSelectedTurf(e.target.value)}
            required
          >
            <option value="">--Choose a Turf--</option>
            {turfs.map((turf, idx) => (
              <option key={idx} value={turf}>
                {turf}
              </option>
            ))}
          </select>

          <label>Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />

          <label>Select Time Slot:</label>
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          >
            <option value="">--Choose a Slot--</option>
            {slots.map((slot, idx) => (
              <option key={idx} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <button type="submit" className="booking-button">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default TurfBookingPage;
