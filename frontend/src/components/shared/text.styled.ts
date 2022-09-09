import styled from "styled-components";

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.theme.text};
  width: 100%;
  height: 100%;
  letter-spacing: 4px;
  text-align: center;
`;
export const Heading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.06;
  text-align: center;
  width: 100%;

  color: ${({ theme }) => theme.theme.text};
`;

export const HeadingSmall = styled.div`
  color: #444444;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const TextWrap = styled.p`
  color: ${({ theme }) => theme.theme.text};
  font-size: 1rem;
`;
