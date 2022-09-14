import React from "react";
import { NavLink } from "react-router-dom";
//
import { BurgerMenuStyled } from "./burgerMenu.styled";

export const BurgerMenu = ({ open, setOpen }: any) => {
  return (
    <BurgerMenuStyled open={open}>
      <NavLink to="/" onClick={() => setOpen(!open)}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => setOpen(!open)}>
        About us
      </NavLink>
      <NavLink to="/search" onClick={() => setOpen(!open)}>
        Search
      </NavLink>
    </BurgerMenuStyled>
  );
};
