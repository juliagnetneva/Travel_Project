import React from "react";
import { Container, Main, ScrollToTop } from "../shared";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
          <ScrollToTop />
        </Container>
      </Main>
      <Footer />
    </>
  );
};
