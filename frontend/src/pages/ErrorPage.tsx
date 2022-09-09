import React from "react";
//
import { HeroBanner } from "../components";
import ErrorImage from "../assets/hero/hero_banner_error.jpg";

export const ErrorPage = () => {
  return (
    <section>
      <HeroBanner image={ErrorImage} />
    </section>
  );
};
