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
import {
  ButtonWhite,
  FlexRow,
  HeadingMiddle,
  HeadingSmall,
  LinkMore,
} from "../shared";
import { IRootState } from "../../store";
import { useSelector } from "react-redux";

export const Carousel = ({ title, path, text, settings, data }: any) => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );
  const [slider, setSlider] = useState<any>(null);

  return (
    <CarouselSection>
      <FlexRow>
        <HeadingMiddle>{title}</HeadingMiddle>
        {isLoggedIn && <LinkMore path={path} text={text} />}
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
                  {isLoggedIn && <ButtonWhite>Learn more</ButtonWhite>}
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
        <IconContext.Provider value={{ size: "2.5rem", color: "#a2a2a2" }}>
          <IoIosArrowDropleft onClick={slider?.slickPrev} />
          <IoIosArrowDropright onClick={slider?.slickNext} />
        </IconContext.Provider>
      </ButtonContainer>
    </CarouselSection>
  );
};
