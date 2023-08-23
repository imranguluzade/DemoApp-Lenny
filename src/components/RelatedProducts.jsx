import React from "react";
import Button from "src/components/Button";
import PopularProdCart from "./PopularProdCart";

const RelatedProducts = () => {
  return (
    <div className="related-products container">
      <div className="related-products-heading">
        <h6>Related Product</h6>
        <Button text="View Detail" variant="outline" size="xxs" />
      </div>
      <div className="related-products-cards">
        <PopularProdCart />
        <PopularProdCart />
        <PopularProdCart />
        <PopularProdCart />
      </div>
    </div>
  );
};

export default RelatedProducts;
