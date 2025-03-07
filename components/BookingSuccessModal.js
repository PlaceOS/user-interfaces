import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./BookingSuccessModal.css";

function BookingSuccessModal({ isOpen, onClose, bookingDetails }) {
  if (!isOpen) return null;

  const { title, date } = bookingDetails || {};

  return (
    <div className="success-overlay" onClick={onClose}>
      <div className="success-content" onClick={(e) => e.stopPropagation()}>
        <FaCheckCircle className="success-icon" />
        <h2 className="success-title">Room booked!</h2>

        <p className="success-message">
          Your booking
          {title ? ` for "${title}"` : ""}
          {date ? ` on ${new Date(date).toLocaleString()}` : ""} has been
          successfully booked.
          <br />
          Please check in 15 minutes prior to confirm your arrival.
        </p>

        <button className="return-button" onClick={onClose}>
          Return to Home
        </button>
      </div>
    </div>
  );
}

export default BookingSuccessModal;
