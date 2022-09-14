import React from "react";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactsBlockStyled } from "./contactsBlock.styled";
import { ButtonWhite, HeadingSmall, SocialIcons, TextWrap } from "../../shared";

export const Contacts = () => {
  return (
    <ContactsBlockStyled>
      <div>
        <ButtonWhite>
          <a href="tel:375295259783">
            <FontAwesomeIcon icon={faPhone} /> CONTACT US
          </a>
        </ButtonWhite>
        <ButtonWhite>
          <a href="mailto:juliagnetneva@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> SEND E-MAIL
          </a>
        </ButtonWhite>
      </div>
      <div>
        <HeadingSmall>Follow Us</HeadingSmall>
        <SocialIcons />
      </div>
      <div>
        <HeadingSmall>Our address:</HeadingSmall>
        <TextWrap>
          84 Avenue Charles de Gaulle - 92200
          <br />
          Paris
        </TextWrap>
      </div>
    </ContactsBlockStyled>
  );
};
