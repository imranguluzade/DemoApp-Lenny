import React from "react";
import { useState, useEffect, useContext } from "react";
import { modalContext } from "src/context/ModalProvider";
import { Link } from "react-router-dom";
import starIcon from "src/assets/star.png";
import axios from "axios";
import "./Cart.scss";

const ProductCart = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/products?populate=*`
        );
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const toggleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
  };
  return (
    <>
      {products.map((product) => (   
          <div className="pop-prod-cart"  key={product.id}>
            <div className="pop-prod-image">
              <img
                src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                  product?.attributes?.thumbnail.data?.attributes?.url
                }`}
              />
              <button onClick={toggleClick} className="add-to-fav-btn">
                {!isFavorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 red-heart"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                )}
              </button>
            </div>
            <div className="pop-prod-details">
              <div className="pop-prod-details-title">
                <p className="prod-name">{product?.attributes?.name}</p>
                <p className="seller-name">North Purwokerto</p>
                <div className="prod-info">
                  <img src={starIcon} />
                  <span className="feedback-point">4.8</span>
                  <div className="circle-space"></div>
                  <span className="sold-count">
                    {product?.attributes?.solds} Sold
                  </span>
                </div>
              </div>
              <span className="pop-prod-details-price">
                {product?.attributes?.price}$
              </span>
            </div>
          </div>
      ))}
    </>
  );
};

export default ProductCart;
