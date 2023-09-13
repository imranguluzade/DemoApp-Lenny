import React, { createContext, useState } from "react";

export const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const globalState = {
    isModalOpen,
    setIsModalOpen,
    isLogin,
    setIsLogin,
    isActive,
    setIsActive,
    filteredItems,
    setFilteredItems,
  };

  return (
    <modalContext.Provider value={globalState}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
