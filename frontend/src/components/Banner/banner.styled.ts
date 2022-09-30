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
    height: 370px;
    & > *:first-child {
      display: none;
    }
  }
`;

export const BannerCards = styled(FlexColumn)`
  padding: 1rem;
  justify-content: space-around;
  width: 44%;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    padding: 0.7rem;
  }
`;
export const Card = styled(FlexRow)`
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 47%;
  color: ${({ theme }) => theme.theme.text};
  h4 {
    font-family: "Lexend Exa", sans-serif;
    margin: 0 5px;
  }
  p {
    font-size: 0.8rem;
    margin: 5px;
    line-height: 1.5;
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
  }
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  height: 100%;
  width: 60%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
  @media screen and (max-width: 768px) {
    width: 78%;
  }
`;