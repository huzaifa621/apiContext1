import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { handleClick } = useContext(CartContext);

  return <button onClick={() => handleClick(1)}>Add</button>;
};

export default Cart;
