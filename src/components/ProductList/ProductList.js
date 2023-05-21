import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import logo from "../../assets/logo.png";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setPaginationModel,
  setSelectedProductId,
} from "../../actions/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);
  const totalPages = useSelector((state) => state.product.totalPages);
  const paginationModel = useSelector((state) => state.product.paginationModel);
  const currentPage = useSelector((state) => state.product.currentPage);
  const navigate = useNavigate();
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(setSelectedProductId(null));
  }, [dispatch]);

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

  const rows = products
    ? products.map((product) => {
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

        return {
          id: product.id,
          image: imageUrl || "",
          name: product.name,
          category: product.main_category,
          price: product.mrp?.mrp || "",
          description: product.description || "Not available",
        };
      })
    : [];

  const getRowHeight = () => {
    return 200;
  };

  const handleRowClick = (params) => {
    // console.log(params)
    dispatch(setSelectedProductId(params.id));
    navigate(`/product/${params.id}`);
  };

  const handlePaginationModelChange = (model) => {
    dispatch(setPaginationModel(model));
    dispatch(setCurrentPage(model.page + 1));
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="product-list-container">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[20]}
        getRowHeight={getRowHeight}
        pagination
        page={currentPage}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        rowCount={totalPages * 20}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default ProductList;
