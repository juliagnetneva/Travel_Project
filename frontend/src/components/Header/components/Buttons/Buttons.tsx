import React from "react";
import { ButtonWhite } from "../../../shared/buttons/buttonWhite.styled";
import { Toggler } from "../../../../theme/Toggler";
import { ButtonRed } from "../../../shared";
import { ButtonsStyled } from "./buttons.styled";

export const Buttons = () => {
  return (
    <ButtonsStyled>
      <Toggler />
      <ButtonRed>Sign In</ButtonRed>
    </ButtonsStyled>
  );
};
