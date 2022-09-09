import React from "react";
//
import { HeroBanner } from "../components";
import SearchImage from "../assets/hero/hero_banner_search.jpg";

export const SearchPage = () => {
  return (
    <section>
      <HeroBanner image={SearchImage} />
      Search
    </section>
  );
};
