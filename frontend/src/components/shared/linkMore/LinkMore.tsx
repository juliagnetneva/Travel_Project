import React from "react";
import { Link } from "react-router-dom";
//
import { IoIosArrowForward } from "react-icons/io";
//
import { TextWrap } from "../text.styled";

export const LinkMore = ({ path, text }: any) => {
  return (
    <Link to={path}>
      <TextWrap>
        {text}
        <span>
          <IoIosArrowForward />
        </span>
      </TextWrap>
    </Link>
  );
};
