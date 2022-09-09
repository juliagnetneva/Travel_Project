import styled from "styled-components";

export const BurgerStyled: any = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 100;
    width: 2.5rem;
    height: 2.2rem;
    position: fixed;
    top: 30px;
    right: 50px;
    div {
      width: 2.2rem;
      height: 0.3rem;
      border-radius: 2px;
      margin: 0.2rem;
      background-color: ${({ open }: any) => (open ? "#a8abab" : "#e5e5e5")};
      transform-origin: 1px;
      transition: all 0.2s linear;
      &:nth-child(1) {
        transform: ${({ open }: any) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        opacity: ${({ open }: any) => (open ? "0" : "1")};
      }
      &:nth-child(3) {
        transform: ${({ open }: any) =>
          open ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;
