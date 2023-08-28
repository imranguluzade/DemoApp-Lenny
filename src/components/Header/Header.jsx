import React, { useContext, useRef } from "react";
import Modal from "../Modal/Modal";
import { modalContext } from "../../context/ModalProvider";
import logoImage from "src/assets/Logo.png";
import searchIcon from "src/assets/search-normal.png";
import basketIcon from "src/assets/shopping-cart.png";
import profileIcon from "src/assets/Frame3.png";
import notificationIcon from "src/assets/notification.png";
import smsIcon from "src/assets/sms.png";
import { Link } from "react-router-dom";
import { getUserData } from "src/helper";
import './Header.scss';
import Profile from "../ProfileInfo/Profile";

const Header = () => {
  const { setIsModalOpen, isActive, setIsActive } = useContext(modalContext);
  const { jwt } = getUserData();

  const toggleClassName = () => {
    setIsActive(!isActive);
  };

  const btnRef = useRef();


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
          {jwt && <div className="notification-icons">
            <button><img src={notificationIcon} /></button>
            <button><img src={smsIcon} /></button>
          </div>}
          <Modal />
          <Profile />
          <button className="h-profile">
            <img src={profileIcon}
              ref={btnRef}
              onClick={() => {
                !jwt ? setIsModalOpen(true) : toggleClassName()
              }
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
