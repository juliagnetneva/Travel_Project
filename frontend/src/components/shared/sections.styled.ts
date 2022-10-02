import styled from "styled-components";

export const Main = styled.main`
  flex: 1 1 auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 960px) {
    padding: 0 15px;
  }
`;

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
`;

export const FlexRow = styled.div<{ start?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: ${({ start }) => (start ? "start" : "center")};
  justify-content: space-between;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
