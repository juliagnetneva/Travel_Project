import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.theme.text};
  border: 2px solid ${({ theme }) => theme.theme.toggleBorder};
  color: ${({ theme }) => theme.theme.toggleText};
  box-shadow: ${({ theme }) => theme.theme.boxShadow};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.5rem 0.8rem;
  transition: all 0.1s linear;
  &:hover {
    color: ${({ theme }) => theme.theme.toggleHover};
  }
`;
