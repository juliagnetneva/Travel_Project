import styled from "styled-components";
import { FlexColumn, Section } from "../shared";

export const BannerImageStyled = styled(Section)`
  width: 100%;
  margin: 6rem auto;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.theme.boxShadow};
  position: relative;
  @media screen and (max-width: 768px) {
    margin: 2.5rem auto;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BannerText = styled(FlexColumn)`
  width: 40%;
  height: 450px;
  z-index: 20;
  color: #dedede;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-left: 4rem;
  h3 {
    color: #dedede;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 440px) {
    width: 85%;
    margin: 0 auto;
  }
`;
