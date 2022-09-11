import styled from "styled-components";
import { FlexColumn, FlexRow, Section } from "../shared";

export const BannerStyled = styled(Section)`
  width: 100%;
  height: 30vw;
  margin: 1rem 0;
  background: ${({ theme }) => theme.theme.sectionBackground};
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.theme.boxShadow};
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    height: 40vh;
    & > *:first-child {
      display: none;
    }
  }
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  height: 100%;
  width: 55%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const BannerCards = styled(FlexColumn)`
  padding: 1rem;
  justify-content: space-around;
  width: 44%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled(FlexRow)`
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 47%;
  color: ${({ theme }) => theme.theme.text};
  div {
    margin-left: 1rem;
  }
  img {
    border-radius: 7px;
  }
  h4 {
    font-family: "Lexend Exa", sans-serif;
  }
  p {
    font-size: 0.8rem;
  }
`;
