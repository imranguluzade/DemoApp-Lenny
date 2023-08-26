import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import { modalContext } from "../../context/ModalProvider";
import logoImage from "src/assets/Logo.png";
import searchIcon from "src/assets/search-normal.png";
import basketIcon from "src/assets/Frame6.png";
import profileIcon from "src/assets/Frame3.png";
import { Link } from "react-router-dom";
import { getUserData } from "src/helper";
import './Header.scss';

const Header = () => {
  const { setIsModalOpen, isAuth } = useContext(modalContext);
  const { jwt } = getUserData();

  return (
    <div className="big-container">
      <div className="header-container container">
        <div className="h-logo">
          <Link to="/">
            <img src={logoImage} />
          </Link>
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
          <button className="search-logo">
            <img src={searchIcon} />
          </button>
        </div>
        <div className="pp-basket">
          <button className="h-basket">
            <img src={basketIcon} />
          </button>
          <div className="cutter2"></div>
          <Modal />
          {!jwt ? <button className="h-profile">
            <img
              onClick={() => {
                if (!isAuth) {
                  setIsModalOpen(true);
                }
              }}
              src={profileIcon}
            />
          </button> : <span>Hello User</span> }
        </div>
      </div>
    </div>
  );
};

export default Header;
