import React from "react";
import "./ProductDetails.css";
import logo from "../../assets/logo.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );

  const toSentenceCase = (str) => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const product = filteredProducts.find((p) => p.id === parseInt(id));
  // console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.images.front ||
          product.images?.left||
          product.images?.right||
          product.images?.top_left||
          product.images?.top_right||
          product.images?.top||
          product.images?.back||
          product.images?.bottomlogo||
          logo} alt="Product" 
          className="product-image-details"/>
      </div>
      <div className="product-details-info">
        <h2 className="product-details-title">{toSentenceCase(product.name)}</h2>
        <p className="product-details-category">Category: {product.main_category}</p>
        <p className="product-details-description">
          Description:{" "}
          {product.description ? product.description : "Not Available"}
        </p>
        <p className="product-details-price">Price: ₹{product.mrp.mrp}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
