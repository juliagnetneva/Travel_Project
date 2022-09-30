import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
//
import { Button, HeadingMiddle } from "../shared";
import {
  BackgroundImage,
  BannerImageStyled,
  BannerText,
} from "./bannerImage.styled";
import { IRootState } from "../../store";
import Beach from "../../assets/homepage/beach.jpg";

export const BannerImage = () => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  return (
    <BannerImageStyled>
      <BackgroundImage>
        <img src={Beach} />
      </BackgroundImage>
      <BannerText>
        <HeadingMiddle>Become a Member</HeadingMiddle>
        <p>Exclusive rates, earn points towards free nights and more.</p>
          <p>Have a nice rest!</p>
        {isLoggedIn ? (
          <Link to="/search"><Button>Go to Search</Button></Link>
        ) : (
            <Link to="/login"><Button red>Sign In</Button></Link>
        )}
      </BannerText>
    </BannerImageStyled>
  );
};
