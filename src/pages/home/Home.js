import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ProductList from "../../components/ProductList/ProductList";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products"
      )
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.main_category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home">
      <h1 className="title">Fresh, Fast & Fabulous Deals</h1>
      <p className="description">
        Instant grocery delivery and in-store pick-up. Over 18,000 products on
        great deals, everyday!
      </p>

      <SearchFilter onSearch={handleSearch} />

      <CategoryFilter onCategoryFilter={handleCategoryFilter} />

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
