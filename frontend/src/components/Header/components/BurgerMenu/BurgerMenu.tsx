import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//
import { BurgerMenuStyled } from "./burgerMenu.styled";
import { IRootState } from "../../../../store";

export const BurgerMenu = ({ open, setOpen }: any) => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );
  return (
    <BurgerMenuStyled open={open}>
      <NavLink to="/" onClick={() => setOpen(!open)}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => setOpen(!open)}>
        About us
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/search" onClick={() => setOpen(!open)}>
          Search
        </NavLink>
      )}
    </BurgerMenuStyled>
  );
};
