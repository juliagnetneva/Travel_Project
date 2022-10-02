import styled from "styled-components";
import { FlexRow } from "../../../shared";

export const SearchImage = styled.div`
  height: 250px;
  background-color: #e7e6eb;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SearchHeading = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  z-index: 5;
  height: calc(250px - 134px);
  @media screen and (max-width: 960px) {
    height: calc(250px - 109px);
  }
  @media screen and (max-width: 480px) {
    height: calc(250px - 100px);
  }
`;
export const Selected = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
  min-height: 2.5rem;
  padding: 0.5rem;
  margin: 0.5rem 0 0.7rem;
  background-color: ${({ theme }) => theme.theme.sectionBackground};
  box-shadow: ${({ theme }) => theme.theme.boxShadow};
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SearchBoxStyled = styled.div`
  position: relative;
  border-radius: 3px;
  width: 100%;
  padding: 0.5rem;
`;

export const SearchInputStyled = styled.input`
  padding: 5px;
  outline: none;
  border-radius: 3px;

  border: 1px solid gray;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;
