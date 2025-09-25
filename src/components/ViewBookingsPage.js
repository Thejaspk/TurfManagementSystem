import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ViewBookingsPage.css";

function ViewBookingsPage() {
  const navigate = useNavigate();

  // Dummy booking data
  const bookings = [
    {
      id: 1,
      turf: "Green Field",
      date: "2025-10-30",
      slot: "6 AM - 8 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      turf: "Sunny Turf",
      date: "2025-10-31",
      slot: "8 AM - 10 AM",
      status: "Pending",
    },
    {
      id: 3,
      turf: "Pro Arena",
      date: "2025-11-01",
      slot: "4 PM - 6 PM",
      status: "Cancelled",
    },
  ];

  return (
    <div className="view-bookings-page">
      <div className="view-bookings-card">
        <h2 className="view-bookings-title">Your Bookings</h2>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Turf</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.turf}</td>
                <td>{booking.date}</td>
                <td>{booking.slot}</td>
                <td className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="back-button" onClick={() => navigate("/home")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ViewBookingsPage;
