import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import SearchResults from "./pages/SearchResults/SearchResults";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results/:id" element={<SearchResults />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />

        <Route element={<ProtectedRoutes />}>

        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
