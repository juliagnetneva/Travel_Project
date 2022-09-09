import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
//
import { SocialFollowStyled } from "./socialFollow.styled";
import { HeadingSmall } from "../../../shared";

export const SocialFollow = () => {
  return (
    <SocialFollowStyled>
      <HeadingSmall>Social networks</HeadingSmall>
      <a
        href="https://twitter.com/"
        style={{ color: "#49a1eb" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/"
        style={{ color: "#574a4a" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.facebook.com/"
        style={{ color: "#4968ad" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        href="https://www.youtube.com/"
        style={{ color: "#eb3323" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </SocialFollowStyled>
  );
};
