import styled from "styled-components";

export const WelcomeStyled = styled.div`
  color: ${({ theme }) => theme.theme.text};
  text-align: center;
  margin-top: 2rem;
  h2 {
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 3px;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  p {
    font-size: 1.2rem;
  }
`;
