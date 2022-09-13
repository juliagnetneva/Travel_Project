import React from "react";
//
import {
  FlexColumn,
  FlexRow,
  HeadingMiddle,
  HeadingSmall,
  HeroBanner,
} from "../components";
import AboutImage from "../assets/hero/hero_banner_about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faSkype,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ButtonWhite } from "../components/shared/buttons/buttonWhite.styled";
import Founder from "../assets/founder.jpg";
export const AboutPage = () => {
  return (
    <section>
      <HeroBanner image={AboutImage} />
      <h1>We Are Travel International Company</h1>
      <HeadingMiddle>WELCOME</HeadingMiddle>
      <p>
        Travel with us as we expand our world, improve the communities we serve
        and open doors to new opportunities.
      </p>
      <FlexColumn>
        <HeadingMiddle>THE FOUNDER</HeadingMiddle>

        <p>
          {" "}
          <img
            src={Founder}
            alt="Marie Anna"
            width="90px"
            style={{ float: "left", marginRight: "1.2rem" }}
          />
          After 10 years working in Advertising and Public Relations for the
          luxury industry, I decided to change my career and I built my own
          boutique Travel Agency. I spent time across France discovering the
          rare gems in my country and meeting incredible partners to offer
          outstanding experiences off the beaten path. <br />
          From this point forward, I combine my passion for travelling and my
          expertize in project management and events for high-end customers who
          want to experience authentic and unique adventures, always with a
          bespoke treat. If you recognize yourself in this description, just get
          in touch. <br />
          <b>Marie Anna Duppe</b>
        </p>
        <div style={{ margin: "1rem 0" }}>
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
        <div style={{ width: "fit-content" }}>
          <HeadingSmall>Follow Us</HeadingSmall>
          <FlexRow>
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
          </FlexRow>
        </div>
      </FlexColumn>
      <HeadingSmall>Our address:</HeadingSmall>
      <p> 84 Avenue Charles de Gaulle - 92200</p> <p>Paris</p>
    </section>
  );
};
