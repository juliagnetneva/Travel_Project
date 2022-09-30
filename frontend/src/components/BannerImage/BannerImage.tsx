import React from "react";
import { useSelector } from "react-redux";
//
import { ButtonRed, ButtonWhite, HeadingMiddle } from "../shared";
import {
  BackgroundImage,
  BannerImageStyled,
  BannerText,
} from "./bannerImage.styled";
import { IRootState } from "../../store";
import {Link} from "react-router-dom";

export const BannerImage = ({ image }: any) => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  return (
    <BannerImageStyled>
      <BackgroundImage>
        <img src={image} />
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
