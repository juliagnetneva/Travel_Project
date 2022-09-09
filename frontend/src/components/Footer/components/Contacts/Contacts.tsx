import React from "react";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
//
import { ContactsStyled } from "./contacts.styled";
import { HeadingSmall } from "../../../shared";

export const Contacts = () => {
  return (
    <ContactsStyled>
      <HeadingSmall>Contact us</HeadingSmall>
      <a href="tel:375295259783">
        <FontAwesomeIcon icon={faPhone} />+ 3 7529 555 22 11
      </a>

      <a href="mailto:juliagnetneva@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        travel@gmail.com
      </a>
      <a href="skype:julia_enamorado?userinfo">
        <FontAwesomeIcon icon={faSkype} /> Go to Skype
      </a>
    </ContactsStyled>
  );
};
