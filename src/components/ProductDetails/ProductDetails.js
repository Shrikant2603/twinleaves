import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  const toSentenceCase = (str) => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.row.image} alt="Product" />
      </div>
      <div className="product-details-info">
        <h2>{toSentenceCase(product.row.name)}</h2>
        <p>Category: {product.row.category}</p>
        <p>Description: {product.row.description}</p>
        <p>Price: ₹{product.row.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
