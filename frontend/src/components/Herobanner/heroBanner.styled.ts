import styled from "styled-components";

export const HeroBannerContainer = styled.div`
  height: calc(45vw - 140px);
  @media screen and (max-width: 960px) {
    height: calc(60vw - 110px);
  }
  @media screen and (max-width: 768px) {
    height: calc(50vh - 100px);
    min-height: 45vw;
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
    height: 60vw;
  }
  @media screen and (max-width: 768px) {
    height: 50vh;
    min-height: 60vw;
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
