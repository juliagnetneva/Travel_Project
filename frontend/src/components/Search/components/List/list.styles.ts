import styled from "styled-components";

export const ListStyled = styled.div`
  width: 35%;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-self: start;
  padding: 0.5rem;
`;

export const FormWrap = styled.div`
  min-height: 150px;
  width: 100%;
  label {
    color: ${({ theme }) => theme.theme.text};
  }
  select {
    width: 98%;
    line-height: 1.3;
    padding: 5px;
    border: 1px solid #aaa;
    border-radius: 3px;
    margin-bottom: 0.3rem;
  }
`;

export const RenderList = styled.div`
  overflow: auto;
  width: 100%;
  color: ${({ theme }) => theme.theme.text};
`;
