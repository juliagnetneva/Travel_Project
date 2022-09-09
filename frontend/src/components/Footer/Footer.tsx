import React from "react";
import { Link } from "react-router-dom";
//
import { FooterStyled } from "./footer.styled";
import { Container, FlexRow, Logo } from "../shared";
import { About, Contacts, Copyright, SocialFollow } from "./components";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FlexRow start={"start"}>
          <Link to="/">
            <Logo></Logo>
          </Link>
          <About />
          <SocialFollow />
          <Contacts />
        </FlexRow>
      </Container>
      <Copyright />
    </FooterStyled>
  );
};
