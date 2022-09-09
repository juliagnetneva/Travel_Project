import styled from "styled-components";
import Slider from "react-slick";
//
import { FlexRow } from "../shared";

export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;

export const ImageWrapper = styled.div`
  width: 90%;
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  outline: none;

  @media screen and (max-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ButtonContainer = styled(FlexRow)`
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }
  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ReviewSlider: any = styled(Slider)`
  width: 100%;
  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    outline: none;
  }
  .slick-list {
    overflow: hidden;
  }
`;
