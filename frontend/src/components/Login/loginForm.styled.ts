import styled from "styled-components";

export const LoginFormStyled = styled.div`
  width: fit-content;
  margin: 4rem auto 0;
  position: relative;
  
  @media screen and (max-width: 960px) {
    margin: 4.5rem auto 0;
  }
`;

export const FormStyled = styled.form`
  max-width: 300px;
  position: relative;
  padding: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.theme.sectionBackground};
  border-radius: 0.4em;
  box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.08),
    0 16px 10px -8px rgba(0, 0, 0, 0.6);

  div {
    position: relative;
  }
  button {
    vertical-align: middle;
  }
  label {
    width: 50%;
    float: left;
    padding-top: 9px;
    color: ${({ theme }) => theme.theme.text};
    font-size: 12px;
    text-transform: uppercase;

    text-shadow: 0 1px 0 #000;
    text-indent: 10px;
    font-weight: 600;
    cursor: pointer;
  }
  input {
    width: 50%;
    float: left;
    padding: 8px 5px;
    margin-bottom: 10px;
    font-size: 12px;
    background-color: ${({ theme }) => theme.theme.sectionBackground};
    border: none;
    box-shadow: 1px 1px 2px rgba(174, 175, 175, 0.75);
    border-radius: 3px;
    :focus {
      box-shadow: inset 1px 1px 2px rgba(174, 175, 175, 0.75);
      background: #ffffff;
      border-color: #51cbee;
      outline: none;
    }
    :hover {
      background: #ffffff;
    }
  }
`;

export const LoginPageBackground = styled.div`
  background-color: #6593c5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`