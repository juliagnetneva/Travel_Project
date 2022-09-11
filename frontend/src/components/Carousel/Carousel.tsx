import React, { useState } from "react";
import ReactPlayer from "react-player";
import { IconContext } from "react-icons";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
//
import {
  SliderItem,
  ReviewSlider,
  ButtonContainer,
  CarouselSection,
  TextContainer,
  ImageContainer,
  VideoContainer,
} from "./carousel.styled";
import { FlexRow, HeadingMiddle, HeadingSmall, LinkMore } from "../shared";
import { ButtonWhite } from "../shared/buttons/buttonWhite.styled";

export const Carousel = ({ title, path, text, settings, data }: any) => {
  const [slider, setSlider] = useState<any>(null);

  return (
    <CarouselSection>
      <FlexRow>
        <HeadingMiddle>{title}</HeadingMiddle>
        <LinkMore path={path} text={text} />
      </FlexRow>
      <ReviewSlider {...settings} ref={setSlider}>
        {data.map((el: any, index: any) => (
          <SliderItem key={index}>
            {el.image ? (
              <>
                <ImageContainer>
                  <img src={el.image} alt={el.title} />
                </ImageContainer>
                <TextContainer>
                  <HeadingSmall>{el.title}</HeadingSmall>
                  <ButtonWhite>Learn more</ButtonWhite>
                </TextContainer>
              </>
            ) : (
              <VideoContainer>
                <ReactPlayer
                  url={el.video}
                  autoPlay
                  loop
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoContainer>
            )}
          </SliderItem>
        ))}
      </ReviewSlider>
      <ButtonContainer>
        <IconContext.Provider value={{ size: "2.5rem", color: "#605f5f" }}>
          <IoIosArrowDropleft onClick={slider?.slickPrev} />
          <IoIosArrowDropright onClick={slider?.slickNext} />
        </IconContext.Provider>
      </ButtonContainer>
    </CarouselSection>
  );
};
