import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.theme.sectionBackground};
  box-shadow: ${({ theme }) => theme.theme.boxShadow};
  color: #9ea1a8;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;

  @media screen and (max-width: 960px) {
    min-height: 80px;
    font-size: 0.8rem;
  }
`;
