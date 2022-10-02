import styled from "styled-components";

export const PlaceItem = styled.div`
  min-height: 250px;
  max-height: 350px;
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: ${({theme}) => theme.theme.sectionBackground};
  box-shadow: ${({theme}) => theme.theme.boxShadow};
  border-radius: 3px;

  > * {
    margin: 0;
  }
`;

export const PlaceImage = styled.div`
  height: 160px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
