import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetails";
import { Fragment } from "react";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="products/:id" element={<ProductDetail />} />
      </Routes>
    </Fragment>
  );
};

export default App;
