import styled from "styled-components";

export const HeroBannerContainer = styled.div`
  height: 40vw;
  @media screen and (max-width: 960px) {
    height: 40vw;
  }
  @media screen and (max-width: 768px) {
    height: 35vh;
  }
`;

export const HeroBannerImgStyled = styled.div`
  height: 45vw;
  background-color: #e7e6eb;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  @media screen and (max-width: 960px) {
    height: 50vw;
  }
  @media screen and (max-width: 768px) {
    height: 45vh;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & video {
    object-fit: cover;
    z-index: -1;
  }
`;

export const HeroBannerTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
`;
