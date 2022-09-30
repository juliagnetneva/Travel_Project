import React from "react";
//
import { BannerCards, BannerStyled, Card, ImgWrap } from "./banner.styled";
import { HeadingSmall } from "../shared";
import { LinkMore } from "../shared/linkMore/LinkMore";
import North from "../../assets/randomImg/north.jpg";
import Volcano from "../../assets/randomImg/volcano.jpg";
import Beach from "../../assets/randomImg/serf.jpg";
import {useSelector} from "react-redux";
import {IRootState} from "../../store";

export const Banner = () => {
  const isLoggedIn = useSelector(
      (state: IRootState) => !!state.auth.authData.accessToken
  );
  return (
    <BannerStyled>
      <ImgWrap>
        <img src={North} alt="routes" />
      </ImgWrap>
      <BannerCards>
        <Card>
          <div>
            <p>The Big Journey</p>
            <HeadingSmall>Beaches</HeadingSmall>
            {isLoggedIn ? (<LinkMore path="/search" text="Explore " />) : (<LinkMore path="/login" text="Explore " />)}
          </div>
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
            <HeadingSmall>Volcanoes</HeadingSmall>
            {isLoggedIn ? (<LinkMore path="/search" text="Explore " />) : (<LinkMore path="/login" text="Explore " />)}
          </div>
        </Card>
      </BannerCards>
    </BannerStyled>
  );
};
