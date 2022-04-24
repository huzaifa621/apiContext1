import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);
  const handleClick = (x) => {
    setCartValue(cartValue + x);
  };
  return (
    <CartContext.Provider value={{ cartValue, handleClick }}>
      {children}
    </CartContext.Provider>
  );
};
