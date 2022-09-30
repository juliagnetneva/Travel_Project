import styled from "styled-components";

export const Button = styled.button<{ red?: boolean }>`
  border-radius: 4px;
  border: none;
  background-color: ${({ red }) =>
    red ? "#ed2f48" : "rgba(255, 255, 255, 0.8)"};
  box-shadow: ${({ theme }) => theme.theme.boxShadowBtn};
  padding: 8px 20px;
  font-size: 0.8rem;
  color: ${({ red }) => (red ? "#fff" : "#444444")};
  transition: opacity 0.2s ease;
  margin-right: ${({ red }) => (red ? "0" : "0.5rem")};
  :hover {
    ${({ red }) => (red ? "" : "")};
    background-color: ${({ red }) =>
      red ? "rgba(255, 255, 255, 0.8)" : "#ed2f48"};
    color: ${({ red }) => (red ? "#4f4f4f" : "#fff")};
  }
`;
