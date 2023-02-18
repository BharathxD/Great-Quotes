import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/layout/Header";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetails";
import { Fragment } from "react";
import "./App.css";
import AllQuotes from "./pages/Quote/AllQuotes";
import QuoteDetail from "./pages/Quote/QuoteDetail";
import NewQuote from "./pages/Quote/NewQuote";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:id/*" element={<QuoteDetail />} />
        <Route path="/newquote" element={<NewQuote />} />
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="*" element={<Navigate to="/quotes" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Routes>
    </Fragment>
  );
};

export default App;
