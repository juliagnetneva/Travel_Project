import React from "react";
//
import { LoginForm } from "../components";
import LoginImage from "../assets/hero/hero_banner_login.jpg";
import { LoginPageBackground } from "../components/Login/loginForm.styled";

export const LoginPage = () => {
  return (
    <>
      <LoginPageBackground>
        <img src={LoginImage} alt="Discover the Planet" />
      </LoginPageBackground>
      <LoginForm />
    </>
  );
};
