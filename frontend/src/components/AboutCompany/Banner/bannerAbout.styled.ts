import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../shared";

export const BannerSection = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 3rem;
  text-align: center;
`;

export const BannerContent = styled(FlexColumn)`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  color: #c7c7c7;
  h3 {
    width: 80%;
    margin-bottom: 3rem;
    @media screen and (max-width: 768px) {
      width: 90%;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    @media screen and (max-width: 480px) {
      font-weight: 600;
    }
  }
`;

export const BannerItems = styled(FlexRow)`
  width: 100%;
  justify-content: space-around;
  align-items: start;
  > * {
    align-items: center;
    width: 24%;
    @media screen and (max-width: 768px) {
      width: 49%;
      p {
        font-size: 0.9rem;
      }
    }
  }
  .circle {
    border: 1px solid #c7c7c7;
    height: 8rem;
    width: 8rem;
    font-size: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    @media screen and (max-width: 768px) {
      height: 6rem;
      width: 6rem;
      font-size: 1.5rem;
    }
    @media screen and (max-width: 550px) {
      max-height: 4rem;
      max-width: 4rem;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ImageWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
