import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./actions/actions";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.product.currentPage);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
