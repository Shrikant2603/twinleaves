import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import logo from "../../assets/logo.png";
import "./ProductList.css";
import axios from "axios";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const selectedProductIdRef = useRef(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0,
  });
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [currentPage]);

  useEffect(() => {
    if (selectedProductIdRef.current) {
      navigate(`/product/${selectedProductIdRef.current}`);
      selectedProductIdRef.current = null;
    }
  }, [navigate]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products?page=${currentPage}`
      );
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePageChange = (params) => {
    setPaginationModel(params);
    setCurrentPage(params.page + 1);
    console.log(params.page);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img
          src={params.value || logo}
          alt="Product"
          className="product-image"
        />
      ),
    },
    { field: "name", headerName: "Product Name", width: 200 },
    { field: "category", headerName: "Category", width: 250 },
    { field: "price", headerName: "Price(₹)", width: 120 },
    { field: "description", headerName: "Description", width: 250 },
  ];

  const rows = products.map((product, index) => {
    const imageUrls = [
      product.images?.front,
      product.images?.left,
      product.images?.right,
      product.images?.top_left,
      product.images?.top_right,
      product.images?.top,
      product.images?.back,
      product.images?.bottom,
    ];

    const imageUrl = imageUrls.find((url) => url);

    if (!product.id) {
      const generatedId = `generated_${index}`;
      return {
        id: generatedId,
        image: imageUrl || "",
        name: product.name,
        category: product.main_category,
        price: product.mrp?.mrp || "",
        description: product.description || "Not available",
      };
    }

    return {
      id: index + 1,
      image: imageUrl || "",
      name: product.name,
      category: product.main_category,
      price: product.mrp?.mrp || "",
      description: product.description || "Not available",
    };
  });

  const getRowHeight = () => {
    return 200;
  };

  const handleRowClick = (params) => {
    setSelectedProductId(params.id);
    setSelectedProduct(params);
    console.log(params);
    selectedProductIdRef.current = params.id;
  };

  return (
    <div className="product-list-container">
      {selectedProductId ? (
        <ProductDetails product={selectedProduct} />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[20]}
          getRowHeight={getRowHeight}
          pagination
          page={currentPage}
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={handlePageChange}
          rowCount={totalPages * 20}
          onRowClick={handleRowClick}
        />
      )}
    </div>
  );
};

export default ProductList;
