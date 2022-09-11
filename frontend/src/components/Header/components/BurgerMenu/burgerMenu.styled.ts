import styled from "styled-components";

export const BurgerMenuStyled: any = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    transform: ${({ open }: any) =>
      open ? "translateX(0)" : "translateX(100%)"};
    opacity: ${({ open }: any) => (open ? 1 : 0)};
    top: 0;
    right: 0;
    height: 100vh;
    width: 16rem;
    background: rgba(58, 60, 70, 0.75);
    padding: 4rem 0 0 1rem;
    transition: all 0.3s ease-in-out;
    a {
      padding: 20px 10px;
      color: #fff;
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-shadow: 2px 1px 1px #4f4f4f;
    }
  }
`;
