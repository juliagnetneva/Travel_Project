import React from "react";
import ReactPlayer from "react-player";
//
import {
  ButtonRed,
  HeadingBold,
  HeadingOutlined,
  HeadingRedCursive,
} from "../shared";
import { HeroBannerStyled, HeroBannerTextStyled } from "./heroBanner.styled";

export const HeroBanner = ({ image, video }: any) => {
  return (
    <>
      <HeroBannerStyled>
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
      </HeroBannerStyled>
      <HeroBannerTextStyled>
        <HeadingBold>
          Discover<HeadingRedCursive>the</HeadingRedCursive>
          <br />
          <HeadingOutlined>PLANET</HeadingOutlined>
        </HeadingBold>
        <ButtonRed>Get started</ButtonRed>
      </HeroBannerTextStyled>{" "}
    </>
  );
};
