import React from "react";
//
import { ButtonRed, HeadingMiddle } from "../shared";
import {
  BackgroundImage,
  BannerImageStyled,
  BannerText,
} from "./bannerImage.styled";

export const BannerImage = ({ image }: any) => {
  return (
    <BannerImageStyled>
      <BackgroundImage>
        <img src={image} />
      </BackgroundImage>
      <BannerText>
        <HeadingMiddle>Become a Member</HeadingMiddle>
        <p>
          Exclusive rates, earn points towards free nights and more. Sign up
          today for free.
        </p>
        <ButtonRed>Sign In</ButtonRed>
      </BannerText>
    </BannerImageStyled>
  );
};
