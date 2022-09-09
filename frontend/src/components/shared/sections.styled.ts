import styled from "styled-components";

export const Main = styled.main`
  flex: 1 1 auto;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 960px) {
    padding: 0 15px;
  }
`;

export const Section = styled.section`
  width: 97%;
  border: 1px solid lightgray;
  margin: auto;
  max-width: 1280px;
  padding: 50px 70px;
  // inverse
`;

export const Card = styled.div`
  box-shadow: ${({ theme }) => theme.theme.boxShadow};
`;

export const FlexRow: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ start }: any) => (start ? "start" : "center")};
  justify-content: space-between;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
