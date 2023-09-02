import React from "react";
import "src/pages/SearchResults/SearchResults.scss";
import ProductCart from "src/components/Cart/ProductCart";

const SearchResults = () => {
  return (
    <div className="pop-products">
      <div className="pop-products-cards">
        <ProductCart />
        <div></div>
      </div>
    </div>
  );
};

export default SearchResults;
