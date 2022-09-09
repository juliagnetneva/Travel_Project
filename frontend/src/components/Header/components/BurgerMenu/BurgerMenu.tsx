import React from "react";
import { NavLink } from "react-router-dom";
//
import { BurgerMenuStyled } from "./burgerMenu.styled";

export const BurgerMenu = ({ open }: any) => {
  return (
    <BurgerMenuStyled open={open}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/search">Search</NavLink>
    </BurgerMenuStyled>
  );
};
