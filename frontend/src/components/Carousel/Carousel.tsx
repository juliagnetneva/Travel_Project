import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IconContext } from "react-icons";
//
import {
  CarouselImage,
  ImageWrapper,
  ReviewSlider,
  ButtonContainer,
} from "./carousel.styled";
import { data, sliderSettings } from "../../data/carouselData";
import { ButtonRed, FlexRow, Heading, Section, TextWrap } from "../shared";

export const Carousel = () => {
  const [slider, setSlider] = useState<any>(null);

  return (
    <Section>
      <FlexRow style={{ margin: "1rem", wrap: "wrap", height: "100%" }}>
        <Heading>Popular routs</Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#1d609c" }}>
            <IoIosArrowDropleft onClick={slider?.slickPrev} />
            <IoIosArrowDropright onClick={slider?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </FlexRow>

      <ReviewSlider {...sliderSettings} ref={setSlider}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrap>{el.title}</TextWrap>
            <TextWrap>{el.description}</TextWrap>
            <ButtonRed>Learn more</ButtonRed>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};
