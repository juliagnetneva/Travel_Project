import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//
import { NavBarStyled } from "./navBar.styled";
import { IRootState } from "../../../../store";

export const NavBar = () => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );
  const setActive = ({ isActive }: any) => (isActive ? "active" : "");

  return (
    <NavBarStyled>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/about" className={setActive}>
        About us
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/search" className={setActive}>
          Search
        </NavLink>
      )}
    </NavBarStyled>
  );
};
