const initialState = {
  products: [],
  filteredProducts: [],
  totalPages: 1,
  selectedProductId: null,
  paginationModel: {
    pageSize: 20,
    page: 0,
  },
  currentPage: 1,
  loading: true,
  categoryFilter: "All",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload.products,
        filteredProducts: action.payload.products,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "SET_FILTERED_PRODUCTS":
      const filtered = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredProducts: filtered,
      };
    case "SET_SELECTED_PRODUCT_ID":
      return {
        ...state,
        selectedProductId: action.payload,
      };
    case "SET_PAGINATION_MODEL":
      return {
        ...state,
        paginationModel: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_CATEGORY_FILTER":
      const category = action.payload;
      let filteredPro = [];
      if (category === "All") {
        filteredPro = state.products;
      } else {
        filteredPro = state.products.filter(
          (product) => product.main_category === category
        );
      }
      return {
        ...state,
        categoryFilter: category,
        filteredProducts: filteredPro,
      };
    default:
      return state;
  }
};

export default reducer;
