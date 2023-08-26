import React, { createContext, useState } from "react";

export const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const globalState = {
    isModalOpen,
    setIsModalOpen,
    isLogin,
    setIsLogin,
    isAuth,
    setIsAuth
  };

  return (
    <modalContext.Provider value={globalState}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
