import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  min-height: 100px;
  background-color: #e8ebf2;
  color: #9ea1a8;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    min-height: 80px;
    font-size: 0.8rem;
  }
`;
