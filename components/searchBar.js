import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-container">
      <FaSearch className="icon left-icon" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="search-bar-input"
        placeholder="Search by room name..."
      />
    </div>
  );
}

export default SearchBar;
