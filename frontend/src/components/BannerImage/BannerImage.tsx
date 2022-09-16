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
        {isLoggedIn ? (
          <>
            <p>Have a nice rest!</p>
            <ButtonWhite>Go to Search</ButtonWhite>
          </>
        ) : (
          <>
            <p>Sign up today for free.</p>
            <ButtonRed>Sign In</ButtonRed>
          </>
        )}
      </BannerText>
    </BannerImageStyled>
  );
};
