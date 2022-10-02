import styled from "styled-components";

export const ScrollStyled = styled.div<{ scrollState: boolean }>`
  display: ${({scrollState}) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 99;
  bottom: 2rem;
  right: 2rem;
  border-radius: 2rem;
  color: #ec2f48;
  svg {
    height: 3rem;
  }

`;