import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import  Form  from "./components/Form";

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <PopularProdCart/>
      <Form />
    </div>
  );
};

export default App;
