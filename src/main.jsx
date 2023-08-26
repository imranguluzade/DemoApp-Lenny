import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.jsx";
import "./sass/style.scss";
import ModalProvider from "./context/ModalProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
);
