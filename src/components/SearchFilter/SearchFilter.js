import React, { useState } from "react";
import "./SearchFilter.css";

const SearchFilter = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-filter">
      <label className="search-label" htmlFor="searchInput">
        Search by Product Name:
      </label>
      <input
        className="search-input"
        type="text"
        id="searchInput"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Enter product name"
      />
    </div>
  );
};

export default SearchFilter;
