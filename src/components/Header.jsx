import React from "react";
import logoImage from "src/assets/Logo.png";
import searchIcon from "src/assets/search-normal.png"
import basketIcon from "src/assets/Frame6.png"
import profileIcon from "src/assets/Frame3.png"

const Header = () => {
  return (
    <div className="header-container">
      <div className="h-logo">
        <img src = {logoImage} />
      </div>
      <div className="search-box">
        <select className="search-sort">
          <option>All Categories</option>
        </select>
        <div className="cutter"></div>
        <input
          className="search-text"
          type="text"
          placeholder="Search on lenny..."
        />
        <div className="search-logo">
          <img src={searchIcon} />
        </div>
      </div>
      <div className="pp-basket">
        <div className="h-basket">
          <img src={basketIcon} />
        </div>
        <div className="cutter2"></div>
        <div className="h-profile">
          <img src={profileIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
