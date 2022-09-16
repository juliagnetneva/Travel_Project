import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//
import { ThemeStore } from "./providers/ThemeProvider";
import { Theme } from "./theme/Theme";
import {
  AboutPage,
  ErrorPage,
  HomePage,
  SearchPage,
  SinglePage,
} from "./pages";
import { Container, Footer, Header, Main } from "./components";
import { IRootState, useAppDispatch } from "./store";
import { getProfile } from "./store/auth/actionCreators";

function App() {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Router>
      <ThemeStore>
        <Theme>
          <Header />
          <Main>
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/search" element={isLoggedIn && <SearchPage />} />
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
