import styled from "styled-components";

export const ContactsStyled = styled.div`
  display: flex;
  flex-direction: column;
  & a {
    display: block;
    padding-bottom: 0.3rem;
    color: #9ea1a8;
    transition: transform 250ms;
  }
  a:hover {
    transform: translateY(-2px);
  }
  svg {
    margin-right: 0.5rem;
  }
`;
