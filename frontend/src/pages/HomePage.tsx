import React from "react";
//
import {
  Banner,
  BannerImage,
  Carousel,
  HeroBanner,
} from "../components";
import { data } from "../data/homePageData";
import { dataImg, sliderSettingsImg } from "../data/carouselData";
import { dataVid, sliderSettingsVid } from "../data/carouselData";

export const HomePage = () => {
  return (
    <>
      <HeroBanner video={data.video} image={data.image} />
      <Carousel
        data={dataImg}
        settings={sliderSettingsImg}
        title={"POPULAR ROUTS"}
        path={"/search"}
        text={"View more "}
      />
      <Banner />
      <BannerImage />
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
