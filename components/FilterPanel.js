import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FilterPanel.css";

function FilterPanel({ handleFilterClick, onFilterChange }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    onFilterChange({ date: selectedDate, time: selectedTime });
  }, [selectedDate, selectedTime, onFilterChange]);

  const getDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i <= 10; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      dates.push(`${year}-${month}-${day}`);
    }
    return dates;
  };

  const getTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const value = `${String(hour).padStart(2, "0")}:${String(
          minute
        ).padStart(2, "0")}`;
        const hour12 = hour % 12 === 0 ? 12 : hour % 12;
        const minuteStr = String(minute).padStart(2, "0");
        const suffix = hour < 12 ? "AM" : "PM";
        const label = `${hour12}:${minuteStr} ${suffix}`;
        times.push({ value, label });
      }
    }
    return times;
  };

  const dateOptions = getDateOptions();
  const timeOptions = getTimeOptions();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="filter-panel">
      <div className="filter-button-row">
        <button className="filter-button" onClick={handleFilterClick}>
          Filter <FaChevronDown className="filter-icon" />
        </button>
      </div>

      <div className="dropdown-row">
        <div className="dropdown-group">
          <label htmlFor="date-dropdown">Date:</label>
          <select
            id="date-dropdown"
            className="dropdown"
            value={selectedDate}
            onChange={handleDateChange}
          >
            <option value="">Select Date</option>
            {dateOptions.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="time-dropdown">Time:</label>
          <select
            id="time-dropdown"
            className="dropdown"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            <option value="">Select Time</option>
            {timeOptions.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
