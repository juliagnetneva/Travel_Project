import styled from "styled-components";

export const ButtonRed = styled.button`
  border-radius: 4px;
  border: none;
  background-color: #ed2f48;
  box-shadow: ${({ theme }) => theme.theme.boxShadowBtn};
  padding: 8px 20px;
  font-size: 0.8rem;
  color: #fff;

  transition: opacity 0.2s ease;
  :hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #4f4f4f;
  }
`;
