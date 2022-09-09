import styled from "styled-components";
import ActiveNav from "../../../../assets/activ_red.png";

export const NavBarStyled = styled.nav`
  padding: 5px;

  & a {
    display: inline-block;
    min-width: 7rem;
    padding: 10px 20px;
    margin: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-shadow: 2px 1px 1px #4f4f4f;
    transition: all 0.1s linear;
  }

  & .active {
    background-image: url(${ActiveNav});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
