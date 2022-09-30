import React, { useEffect } from "react";
//
import {
  Banner,
  BannerImage,
  Carousel,
  HeroBanner,
  ScrollToTop,
} from "../components";
import { data } from "../data/homePageData";
import { dataImg, sliderSettingsImg } from "../data/carouselData";
import { dataVid, sliderSettingsVid } from "../data/carouselData";
import BannerSmallImage from "../assets/bannerSmall.jpg";

export const HomePage = () => {
  return (
    <>
      <HeroBanner video={data.video} image={data.image} />
      <ScrollToTop />
      <Carousel
        data={dataImg}
        settings={sliderSettingsImg}
        title={"POPULAR ROUTS"}
        path={"/search"}
        text={"View more "}
      />
      <Banner />
      <BannerImage image={BannerSmallImage} />
      <Carousel
        data={dataVid}
        settings={sliderSettingsVid}
        title={"FAR FROM PEOPLE"}
        path={"/search"}
        text={"Search more "}
      />
    </>
  );
};
