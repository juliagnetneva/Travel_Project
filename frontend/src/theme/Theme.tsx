import React, { useContext } from "react";
//
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../providers/ThemeProvider";
import { GlobalStyle } from "../globalStyles/globalStyle";

export const Theme = ({ children }: any) => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
