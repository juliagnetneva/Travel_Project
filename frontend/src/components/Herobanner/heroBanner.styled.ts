import styled from "styled-components";

export const HeroBannerStyled = styled.div`
  height: 45vw;
  background-color: #e7e6eb;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
`;
