import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//
import { IRootState, useAppDispatch } from "../store";
import { getProfile, logoutUser } from "../store/auth/actionCreators";
import { LoginForm } from "../components/Form/LoginForm";

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const profile = useSelector(
    (state: IRootState) => state.auth.profileData.profile
  );
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Вы успeшно авторизовались, {profile}</div>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
      <button onClick={() => dispatch(getProfile())}>update profile</button>
    </div>
  );
  return <div>{isLoggedIn ? <Navigate to="/" /> : <LoginForm />}</div>;
};
