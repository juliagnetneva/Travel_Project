import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { ButtonWhite } from "../components/shared/buttons/buttons.styled";

export const Toggler = () => {
  const theme: any = useContext(ThemeContext);
  return <ButtonWhite onClick={theme.themeToggler}>Switch Theme</ButtonWhite>;
};
