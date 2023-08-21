import React, { createContext, useState } from "react";

export const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const globalState = {
    isModalOpen,
    setIsModalOpen,
    isLogin,
    setIsLogin
  };

  return (
    <modalContext.Provider value={globalState}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
