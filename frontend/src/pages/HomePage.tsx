import React from "react";
//
import { Carousel, HeroBanner } from "../components";
import { data } from "../data/homePageData";

export const HomePage = () => {
  console.log(data);
  return (
    <>
      <div style={{ height: "40vw" }}>
        <HeroBanner video={data.video} image={data.image} />
      </div>
      <Carousel />
    </>
  );
};
