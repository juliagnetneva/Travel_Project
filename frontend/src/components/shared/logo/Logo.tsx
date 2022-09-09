import React from "react";
import LogoImg from "../../../assets/logo.png";
import { LogoStyled } from "./logo.styled";

export const Logo = () => {
  return (
    <LogoStyled>
      <img src={LogoImg} alt="logo" />
    </LogoStyled>
  );
};
