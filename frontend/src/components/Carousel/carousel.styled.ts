import styled from "styled-components";
import Slider from "react-slick";
//
import { FlexColumn, FlexRow, Section } from "../shared";

export const CarouselSection = styled(Section)`
  padding: 0;
  margin: 2rem 0;
`;

export const ReviewSlider: any = styled(Slider)`
  width: 100%;
  .slick-list {
    overflow: hidden;
  }
  .slick-track {
    display: flex;
    padding: 1rem;
    gap: 3rem;
  .slick-slide {
    display: flex;
    justify-content: center;
    outline: none;
  }
`;

export const SliderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 430px;
  background-color: ${({ theme }) => theme.theme.sectionBackground};
  box-shadow: ${({ theme }) => theme.theme.boxShadow};
  border-radius: 10px;
  outline: none;
  @media screen and (max-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
    vertical-align: middle;
    transition: transform 3s ease;
    :hover {
      transform: scale(1.3);
    }
  }
`;
export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  video {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    object-fit: cover;
    vertical-align: middle;
    transition: transform 3s ease;
  }
`;
export const ButtonContainer = styled(FlexRow)`
  justify-content: center;
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }
  & svg:hover {
    opacity: 0.6;
    transition: opacity 0.2s ease-in;
  }
`;

export const TextContainer = styled(FlexColumn)`
  padding: 0 1rem;
  align-items: start;
`;
