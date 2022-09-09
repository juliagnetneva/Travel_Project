import React from "react";
//
import { Link } from "react-router-dom";
import { HeadingSmall } from "../../../shared";
import { AboutStyled } from "./about.styled";

export const About = () => {
  return (
    <AboutStyled>
      <HeadingSmall>About us</HeadingSmall>
      <Link to="/about">Information</Link>
      <Link to="/about">Rewiews</Link>
      <Link to="/about">Team</Link>
    </AboutStyled>
  );
};
