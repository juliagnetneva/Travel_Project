import React from "react";
//
import AboutImage from "../assets/hero/hero_banner_about.jpg";
import {
  BannerAbout,
  Contacts,
  Founder,
  HeroBanner,
  Welcome,
} from "../components";

export const AboutPage = () => {
  return (
    <>
      <HeroBanner image={AboutImage} />
      <Welcome />
      <Founder />
      <BannerAbout />
      <Contacts />
    </>
  );
};
