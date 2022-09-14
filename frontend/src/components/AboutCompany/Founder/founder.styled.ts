import styled from "styled-components";

export const FounderStyled = styled.div`
  align-self: center;
  border-left: 3px double #ced5d5;
  padding-left: 1.5rem;
  width: 80%;
  margin: 3rem auto;
  h3 {
    margin-bottom: 0.7rem;
  }
  p {
    line-height: 1.5rem;
    margin: 0;
    img {
      float: left;
      margin-right: 1.2rem;
      width: 150px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
