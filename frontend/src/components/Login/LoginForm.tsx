import React, { FormEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//
import { IRootState, useAppDispatch } from "../../store";
import { loginUser, logoutUser } from "../../store/auth/actionCreators";
import { Button, PopupModal } from "../shared";
import { FormStyled, LoginFormStyled } from "./loginForm.styled";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const loginRef = useRef<any>("");
  const passwordRef = useRef<any>("");
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

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const login = loginRef.current.value;
    const password = passwordRef.current.value;
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
        <PopupModal
            handleClickButton={handleClosePopup}
            buttonName="OK"
          text={
            errorMessage
              ? `${errorMessage}`
              : `${profile}, you have successfully signed in!`
          }
        />
      )}
      <LoginFormStyled>
        {isLoggedIn ? (
          <Button red onClick={() => dispatch(logoutUser())}>
            Log out
          </Button>
        ) : (
          <FormStyled onSubmit={handleSubmit}>
            <div>
              <label>Login:</label>
              <input type="text" ref={loginRef} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" ref={passwordRef} />
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
