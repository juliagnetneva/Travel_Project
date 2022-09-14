import React from "react";
import {
  BannerContent,
  BannerItems,
  BannerSection,
  ImageWrap,
} from "./bannerAbout.styled";
import BannerImage from "../../../assets/about/banner_about.jpg";
import { FlexColumn } from "../../shared";
export const BannerAbout = () => {
  return (
    <BannerSection>
      <ImageWrap>
        <img src={BannerImage} />
      </ImageWrap>
      <BannerContent>
        <h3>
          We are a community of travelers from all over the world who help
          people discover the planet.
        </h3>

        <BannerItems>
          <FlexColumn>
            <div className="circle">8</div>
            <p>MILLION SATISFIED CUSTOMERS</p>
          </FlexColumn>
          <FlexColumn>
            <div className="circle">150</div>
            <p>TEAM MEMBERS HELP YOU EVERY DAY</p>
          </FlexColumn>
          <FlexColumn>
            <div className="circle">300</div>
            <p>THOUSAND REGISTERED USERS</p>
          </FlexColumn>
          <FlexColumn>
            <div className="circle">2</div>
            <p>MILLION MONTHLY PAGEVIEWS</p>
          </FlexColumn>
        </BannerItems>
      </BannerContent>
    </BannerSection>
  );
};
