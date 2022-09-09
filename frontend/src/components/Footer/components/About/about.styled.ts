import styled from "styled-components";

export const AboutStyled = styled.div`
  & a {
    display: block;
    padding-bottom: 0.3rem;
    color: #9ea1a8;
    transition: transform 250ms;
  }
  a:hover {
    transform: translateY(-2px);
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
