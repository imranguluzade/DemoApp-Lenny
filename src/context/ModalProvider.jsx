import React, { createContext, useState } from "react";

export const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(4);

  const globalState = {
    isModalOpen,
    setIsModalOpen,
    isLogin,
    setIsLogin,
    isActive,
    setIsActive,
    visibleProducts,
    setVisibleProducts
  };

  return (
    <modalContext.Provider value={globalState}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
