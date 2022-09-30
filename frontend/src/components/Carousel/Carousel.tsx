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
    Button,
    FlexRow,
    HeadingMiddle,
    HeadingSmall,
    LinkMore,
} from "../shared";
import { IRootState } from "../../store";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

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
                    {isLoggedIn ? (
                        <Link to='/search'><Button>Learn more</Button></Link>
                    ) : (
                        <Link to='/login'><Button>Learn more</Button></Link>
                    )}
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
