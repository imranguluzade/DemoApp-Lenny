import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/product-detail" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;






