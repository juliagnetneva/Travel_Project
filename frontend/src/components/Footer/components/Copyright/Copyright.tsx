import React from "react";
//
import { Container } from "../../../shared";
import { CopyrightStyled } from "./copyright.styled";

export const Copyright = () => {
  return (
    <CopyrightStyled>
      <Container>
        &#169; 2022 Travel International, Inc. All rights reserved. Proprietary
        Information
      </Container>
    </CopyrightStyled>
  );
};
