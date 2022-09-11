import React from "react";
//
import { BannerCards, BannerStyled, Card, ImgWrap } from "./banner.styled";
import { HeadingSmall } from "../shared";
import { LinkMore } from "../shared/linkMore/LinkMore";
import North from "../../assets/randomImg/north.jpg";
import Volcano from "../../assets/randomImg/volcano.jpg";
import Beach from "../../assets/randomImg/serf.jpg";

export const Banner = () => {
  return (
    <BannerStyled>
      <ImgWrap>
        <img src={North} alt="routes" />
      </ImgWrap>
      <BannerCards>
        <Card>
          <div>
            <p>The Big Journey</p>
            <HeadingSmall>Beach</HeadingSmall>
            <LinkMore path="/search" text="Explore " />
          </div>{" "}
          <ImgWrap>
            <img src={Beach} alt="Beach" />
          </ImgWrap>
        </Card>
        <Card>
          <ImgWrap>
            <img src={Volcano} alt="Volcano" />
          </ImgWrap>
          <div>
            <p>The Big Journey</p>
            <HeadingSmall>Volcano</HeadingSmall>
            <LinkMore path="/search" text="Explore " />
          </div>
        </Card>
      </BannerCards>
    </BannerStyled>
  );
};
