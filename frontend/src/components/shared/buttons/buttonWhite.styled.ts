import styled from "styled-components";

export const ButtonWhite = styled.button`
  border-radius: 4px;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: ${({ theme }) => theme.theme.boxShadowBtn};
  padding: 8px 20px;
  font-size: 0.8rem;
  color: #4f4f4f;

  transition: all 0.25s ease;
  margin-right: 2rem;
  :hover {
    background-color: #ec2f48;
    color: #fff;
  }
`;
