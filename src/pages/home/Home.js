import React from "react";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import ProductList from "../../components/ProductList/ProductList";
import "./Home.css";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Fresh, Fast & Fabulous Deals</h1>
      <p className="description">
        Instant grocery delivery and in-store pick-up. Over 18,000 products on
        great deals, everyday!
      </p>

      <SearchFilter />
      <CategoryFilter />
      <ProductList />
    </div>
  );
};

export default Home;
