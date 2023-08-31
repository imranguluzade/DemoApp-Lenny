import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryLogo from "src/assets/Frame.png";
import './FeaturedCategCard.scss';

const FeaturedCategCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/categories?papulate=*`
        );
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);
  console.log(categories);
  

  return (
    <>
      {categories.map((item) => (
        <div key={item.id} className="feat-cat-card">
          <img src={item.attributes.icon} alt="Category Logo" />
          <h6>{item.attributes.name}</h6>
          <p>8,9k products</p>
        </div>
      ))}
    </>
  );
};

export default FeaturedCategCard;
