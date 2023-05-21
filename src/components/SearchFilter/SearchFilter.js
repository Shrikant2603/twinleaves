import React, { useState } from "react";
import "./SearchFilter.css";
import { useDispatch } from "react-redux";
import { setFilteredProducts } from "../../actions/actions";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(setFilteredProducts(searchQuery));
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
