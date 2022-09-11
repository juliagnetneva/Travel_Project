import React from "react";
import ReactPlayer from "react-player";
//
import {
  ButtonRed,
  HeadingBold,
  HeadingOutlined,
  HeadingRedCursive,
} from "../shared";
import {
  HeroBannerContainer,
  HeroBannerImgStyled,
  HeroBannerTextStyled,
} from "./heroBanner.styled";

export const HeroBanner = ({ image, video }: any) => {
  return (
    <HeroBannerContainer>
      <HeroBannerImgStyled>
        {video ? (
          <ReactPlayer
            url={video}
            playing
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
          />
        ) : (
          <img src={image} alt="Discover the Planet" />
        )}
      </HeroBannerImgStyled>
      <HeroBannerTextStyled>
        <HeadingBold>
          Discover<HeadingRedCursive>the</HeadingRedCursive>
          <br />
          <HeadingOutlined>PLANET</HeadingOutlined>
        </HeadingBold>
        <ButtonRed>Get started</ButtonRed>
      </HeroBannerTextStyled>{" "}
    </HeroBannerContainer>
  );
};
