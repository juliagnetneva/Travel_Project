import React, { useContext } from "react";
import { ButtonWhite } from "../components/shared/buttons/buttonWhite.styled";
import { ThemeContext } from "../providers/ThemeProvider";

export const Toggler = () => {
  const theme: any = useContext(ThemeContext);
  return <ButtonWhite onClick={theme.themeToggler}>Switch Theme</ButtonWhite>;
};
