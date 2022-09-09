import styled from "styled-components";

export const LogoStyled = styled.div`
  max-width: 100px;
  background: #000;
  & img {
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 960px) {
    max-width: 80px;
  }
`;
