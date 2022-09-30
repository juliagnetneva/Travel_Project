import React from "react";
import ReactPlayer from "react-player";
//
import {
  Button,
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
import {Link} from "react-router-dom";

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
            <Link to='/search'><Button red>Go to Search</Button></Link>
        ) : (
            <Link to='/login'><Button red>Get started</Button></Link>
        )}
      </HeroBannerTextStyled>
    </HeroBannerContainer>
  );
};
