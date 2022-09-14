import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SocialIconsStyled } from "./socialIconsStyled";

export const SocialIcons = () => {
  return (
    <SocialIconsStyled>
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
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/"
        style={{ color: "#4968ad" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.youtube.com/"
        style={{ color: "#eb3323" }}
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
    </SocialIconsStyled>
  );
};
