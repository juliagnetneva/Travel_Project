import React from "react";
//
import { Container, FlexRow, Logo } from "../shared";
import { HeaderStyled } from "./header.styled";
import { Burger, Buttons, NavBar } from "./components";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <FlexRow>
          <Logo />
          <Buttons />
          <NavBar />
          <Burger />
        </FlexRow>
      </Container>
    </HeaderStyled>
  );
};
