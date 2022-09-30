import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//
import { BurgerMenuStyled } from "./burgerMenu.styled";
import { IRootState, useAppDispatch } from "../../../../store";
import { Button } from "../../../shared";
import { logoutUser } from "../../../../store/auth/actionCreators";

export const BurgerMenu = ({ open, setOpen }: any) => {
  const dispatch = useAppDispatch();
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
      {isLoggedIn ? (
        <>
          <NavLink to="/search" onClick={() => setOpen(!open)}>
            Search
          </NavLink>
          <Button onClick={() => dispatch(logoutUser())}>
            Log out
          </Button>
        </>
      ) : (
        <Link to="/search">
          <Button red>Sign In</Button>
        </Link>
      )}
    </BurgerMenuStyled>
  );
};
