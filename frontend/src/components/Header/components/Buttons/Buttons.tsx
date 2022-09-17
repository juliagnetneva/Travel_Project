import React from "react";
//
import { Toggler } from "../../../../theme/Toggler";
import { ButtonRed } from "../../../shared";
import { ButtonsStyled } from "./buttons.styled";

export const Buttons = () => {
  return (
    <ButtonsStyled>
      <Toggler />
    </ButtonsStyled>
  );
};
