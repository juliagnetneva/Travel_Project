import React from "react";
import ReactPlayer from "react-player";
//
import {
  ButtonRed,
  ButtonWhite,
  HeadingBold,
  HeadingOutlined,
  HeadingRedCursive,
} from "../shared";
import {
  HeroBannerContainer,
  HeroBannerImgStyled,
  HeroBannerTextStyled,
} from "./heroBanner.styled";
import { IRootState } from "../../store";
import { useSelector } from "react-redux";

export const HeroBanner = ({ image, video }: any) => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

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
        {isLoggedIn ? (
          <ButtonWhite>Go to Search</ButtonWhite>
        ) : (
          <ButtonRed>Get started</ButtonRed>
        )}
      </HeroBannerTextStyled>
    </HeroBannerContainer>
  );
};
