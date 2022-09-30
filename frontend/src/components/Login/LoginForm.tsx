import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//
import { IRootState, useAppDispatch } from "../../store";
import { loginUser, logoutUser } from "../../store/auth/actionCreators";
import { Button, Popup } from "../shared";
import { FormStyled, LoginFormStyled } from "./loginForm.styled";

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );
  const profile = useSelector(
    (state: IRootState) => state.auth.profileData.profile
  );
  const errorMessage = useSelector(
    (state: IRootState) => state.auth.authData.error
  );

  let navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    if (!errorMessage) {
      navigate("/");
    }
  };

  return (
    <>
      {showPopup && (
        <Popup
          handleCloseButton={handleClosePopup}
          text={
            errorMessage
              ? `${errorMessage}! Try again`
              : `${profile}, You have successfully signed in!`
          }
        />
      )}
      <LoginFormStyled>
        {isLoggedIn ? (
          <Button red onClick={() => dispatch(logoutUser())}>Log out</Button>
        ) : (
          <FormStyled onSubmit={handleSubmit}>
            <div>
              <label htmlFor="login">Login:</label>
              <input
                name="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/">
              <Button>Back</Button>
            </Link>
            <Button red>Submit</Button>
          </FormStyled>
        )}
      </LoginFormStyled>
    </>
  );
};
