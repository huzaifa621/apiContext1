import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const NavBar = () => {
  const { cartValue } = useContext(CartContext);
  return <div>{`Items: ${cartValue}`}</div>;
};

export default NavBar;
