import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import star from "src/assets/star.png";
import Button from "../../components/Button/Button";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import ProductGallery from "../../components/Slider/ProductGallery";
import Tabs from "../../components/Tabs/Tabs";
import ShoppingChart from "src/assets/shopping-cart.png";
import { Link } from "react-router-dom";
import './ProductDetails.scss'
import Pagination from "src/components/Pagination/Pagination";
import { Comments } from "src/components/Comments/Comments";

const ProductDetail = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <div className="bread-crumb container">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Electronic",
              href: "",
            },
            {
              title: "G502 x Lightspeed Wireless Gaming Mouse",
            },
          ]}
        />
      </div>
      <div className="product-main-details  container">
        <div className="product-gallery">
          <ProductGallery />
        </div>
        <div className="product-name">
          <h2>G502 X Lightspeed Wireless Gaming Mouse</h2>
          <div className="stars-solds">
            <img src={star} />
            <p className="star-point">4,8</p>
            <p className="solds">1,238 Sold</p>
          </div>
          <h4 className="product-price">$139.99</h4>
          <p className="product-description">
            G502 X LIGHTSPEED is the latest addition to legendary G502 lineage.
            Featuring our first-ever LIGHTFORCE hybrid optical-mechanical
            switches and updated LIGHTSPEED wireless protocol with 68% faster
            response rate.
          </p>
          <h2 className="variant-heading">Product Variant:</h2>
          <div className="variant-flex">
            <div className="variant-type">
              <p>Type</p>
              <select>
                <option>Wireless</option>
              </select>
            </div>
            <div className="variant-color">
              <p>Color</p>
              <select>
                <option>Black</option>
              </select>
            </div>
          </div>
          <div className="button-box">
            <Button text="Buy Now" variant="fill" size="lg" />
            <Button text="Add to Chart" variant="outline" size="lg" />
          </div>
        </div>
      </div>
      <div className="tab-lists container">
        <Tabs />
      </div>
      <div className="container">
        <Comments />
        <Pagination />
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
