import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
//
import { ButtonRed, ButtonWhite, HeadingMiddle } from "../shared";
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
          <Link to="/search"><ButtonWhite>Go to Search</ButtonWhite></Link>
        ) : (
            <Link to="/login"><ButtonRed>Sign In</ButtonRed></Link>
        )}
      </BannerText>
    </BannerImageStyled>
  );
};
