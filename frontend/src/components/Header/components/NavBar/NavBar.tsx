import React from "react";
import { NavLink } from "react-router-dom";
//
import { NavBarStyled } from "./navBar.styled";

export const NavBar = () => {
  const setActive = ({ isActive }: any) => (isActive ? "active" : "");

  return (
    <NavBarStyled>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About us
      </NavLink>
      <NavLink to="/search" className={setActive}>
        Search
      </NavLink>
    </NavBarStyled>
  );
};
