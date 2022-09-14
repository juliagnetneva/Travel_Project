import styled from "styled-components";

export const HeadingBold = styled.h1`
  color: #ffffff;
  font-family: "Lexend Exa", sans-serif;
  text-align: center;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 6rem);
  text-shadow: 1px 1px 2px #c2c2c2;
`;
export const HeadingRedCursive = styled.span`
  color: #e92d47;
  text-align: center;
  font-family: "Qwitcher Grypen", cursive;
  font-weight: 700;
  font-size: clamp(4rem, 9vw, 10rem);
  text-shadow: 1px 1px 3px #a9a9a9;
`;
export const HeadingOutlined = styled.span`
  text-align: center;
  font-family: "Bungee Outline", cursive;
  font-weight: 400;
  font-size: clamp(3.5rem, 8vw, 10rem);
  line-height: 1;
  letter-spacing: 3rem;
  @media screen and (max-width: 960px) {
    letter-spacing: 1rem;
  }
`;
export const HeadingLarge = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 600;
  color: ${({ theme }) => theme.theme.text};
`;

export const HeadingMiddle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: ${({ theme }) => theme.theme.text};
`;

export const HeadingSmall = styled.h4`
  color: ${({ theme }) => theme.theme.text};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const TextWrap = styled.p`
  color: ${({ theme }) => theme.theme.text};
`;
