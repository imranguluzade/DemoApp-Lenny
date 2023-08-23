import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;






