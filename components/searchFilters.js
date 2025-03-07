import React, { useState } from "react";
import "./SearchFilter.css";
import SearchBar from "./searchBar";
import FilterPanel from "./FilterPanel";

function SearchFilter({
  searchQuery,
  onSearchChange,
  handleFilterClick,
  onFilterChange,
}) {
  return (
    <div className="search-filter-container">
      <div className="search-row">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>
      <FilterPanel
        handleFilterClick={handleFilterClick}
        onFilterChange={onFilterChange}
      />
    </div>
  );
}

export default SearchFilter;
