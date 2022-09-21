import React from "react";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/actionCreators";
import { ButtonRed, ButtonWhite } from "../shared";
import { FormStyled, LoginFormStyled } from "./loginForm.styled";

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({ login, password }));
  };

  return (
    <LoginFormStyled>
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
        <ButtonWhite>Back</ButtonWhite>
        <ButtonRed>Submit</ButtonRed>
      </FormStyled>
    </LoginFormStyled>
  );
};
