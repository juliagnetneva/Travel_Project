import React from "react";
import { HeadingMiddle, TextWrap } from "../../shared";
import FounderImg from "../../../assets/about/founder.jpg";
import { FounderStyled } from "./founder.styled";

export const Founder = () => {
  return (
    <FounderStyled>
      <HeadingMiddle>THE FOUNDER</HeadingMiddle>
      <TextWrap>
        <img src={FounderImg} alt="Marie Anna" />
        After 10 years working in Advertising and Public Relations for the
        luxury industry, I decided to change my career and I built my own
        boutique Travel Agency. I spent time across France discovering the rare
        gems in my country and meeting incredible partners to offer outstanding
        experiences off the beaten path. <br />
        From this point forward, I combine my passion for travelling and my
        expertize in project management and events for high-end customers who
        want to experience authentic and unique adventures, always with a
        bespoke treat. If you recognize yourself in this description, just get
        in touch. <br />
        <b>Marie Anna Duppe</b>
      </TextWrap>
    </FounderStyled>
  );
};
