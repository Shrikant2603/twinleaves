import axios from "axios";

export const fetchProducts = (page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
      const response = await axios.get(
        `https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products?page=${page}`
      );
      const products = response.data.products.map((product, index) => ({
        ...product,
        id: index + 1,
      }));

      const totalPages = response.data.totalPages;
      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: { products, totalPages },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch({ type: "FETCH_PRODUCTS_FAILURE" });
    }
  };
};

export const setFilteredProducts = (searchQuery) => {
  return {
    type: "SET_FILTERED_PRODUCTS",
    payload: searchQuery,
  };
};

export const setCategoryFilter = (category) => {
  return {
    type: "SET_CATEGORY_FILTER",
    payload: category,
  };
};

export const setSelectedProductId = (productId) => {
  return {
    type: "SET_SELECTED_PRODUCT_ID",
    payload: productId,
  };
};

export const setPaginationModel = (paginationModel) => {
  return {
    type: "SET_PAGINATION_MODEL",
    payload: paginationModel,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: currentPage,
  };
};
