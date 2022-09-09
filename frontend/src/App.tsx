import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import { ThemeStore } from "./providers/ThemeProvider";
import { Theme } from "./theme/Theme";
import {
  AboutPage,
  ErrorPage,
  HomePage,
  SearchPage,
  SignUpPage,
  SinglePage,
} from "./pages";
import { Container, Footer, Header, Main } from "./components";

function App() {
  return (
    <Router>
      <ThemeStore>
        <Theme>
          <Header />
          <Main>
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search/:id" element={<SinglePage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Container>
          </Main>
          <Footer />
        </Theme>
      </ThemeStore>
    </Router>
  );
}
export default App;
