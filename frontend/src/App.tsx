import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "leaflet/dist/leaflet.css";
//
import { ThemeStore } from "./providers/ThemeProvider";
import { Theme } from "./theme/Theme";
import { IRootState, useAppDispatch } from "./store";
import { getProfile } from "./store/auth/actionCreators";
import {Layout} from "./components";
import {
  AboutPage,
  HomePage,
  LoginPage,
  ErrorPage,
  SearchPage,
} from "./pages/";

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
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/search" element={isLoggedIn ? <SearchPage /> : <Navigate to="/"/>} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Theme>
      </ThemeStore>
    </Router>
  );
}
export default App;
