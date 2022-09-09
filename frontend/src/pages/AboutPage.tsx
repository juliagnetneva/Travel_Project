import React from "react";
//
import { HeroBanner } from "../components";
import AboutImage from "../assets/hero/hero_banner_about.jpg";

export const AboutPage = () => {
  return (
    <section>
      <HeroBanner image={AboutImage} />
    </section>
  );
};
