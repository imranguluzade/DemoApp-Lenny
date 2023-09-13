import React, { useState } from "react";

const useBasket = () => {
  const [basket, setBasket] = useState([]);
  const addToBasket = async ({
    id,
    quantity,
    imgUrl,
    attributes: { name, price, description, quantity: quantities },
  }) => {
    try {
      setBasket([
        ...basket,
        {
          name,
          id,
          imgUrl,
          price,
          quantity: Number(quantity),
          description,
          quantities,
        },
      ]);
    } catch (error) {
        console.log(error);
    }
  };
  return { basket, addToBasket };
};

export default useBasket;
