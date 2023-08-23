import React from "react";
import CategoryLogo from "src/assets/Frame.png";
import './FeaturedCategCard.scss'

const FeaturedCategCard = () => {
  return (
    <div className="feat-cat-card">
      <img src={CategoryLogo} />
      <h6>Electronics</h6>
      <p>8,9k products</p>
    </div>
  );
};

export default FeaturedCategCard;
