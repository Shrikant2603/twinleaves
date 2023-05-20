import React, { useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ onCategoryFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  return (
    <div className="category-filter">
      <label className="category-label" htmlFor="categoryFilter">
        Filter by Category:
      </label>
      <select
        className="category-select"
        id="categoryFilter"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="Fruits & Vegetables">Fruits & Vegetables</option>
        <option value="Beauty & Hygiene">Beauty & Hygiene</option>
        <option value="Gourmet & World Food">Gourmet & World Food</option>
        <option value="Foodgrains, Oil & Masala">
          Foodgrains, Oil & Masala
        </option>
        <option value="Bakery, Cakes & Dairy">Bakery, Cakes & Dairy</option>
        <option value="Beverages">Beverages</option>
        <option value="Snacks & Branded Foods">Snacks & Branded Foods</option>
        <option value="Cleaning & Household">Cleaning & Household</option>
        <option value="Kitchen, Garden & Pets">Kitchen, Garden & Pets</option>
        <option value="Eggs, Meat & Fish">Eggs, Meat & Fish</option>
        <option value="Baby Care">Baby Care</option>
        <option value="All">All</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
