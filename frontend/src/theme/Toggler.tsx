import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { Button } from "../components/shared/buttons/buttons.styled";

export const Toggler = () => {
  const theme: any = useContext(ThemeContext);
  return <Button onClick={theme.themeToggler}>Switch Theme</Button>;
};
