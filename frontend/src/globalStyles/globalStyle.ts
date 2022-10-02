import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<any>`
* {
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
}
html, body {
  height: 100%;
  margin: 0;
  background: ${({ theme }) => theme.theme.bodyBackground};
}
#root {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
footer,
header {
  display: block;
  width: 100%;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}

#mapId {
  width: 100%;
  height: 100%;
}
`;
