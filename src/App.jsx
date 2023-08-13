import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import  Form  from "./components/Form";

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <Form holder="Enter your name" label="Holder Name" type="date"/>
    </div>
  );
};

export default App;
