import styled from "styled-components";

export const PopupOverlay = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 130px;
  max-width: 350px;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.theme.sectionBackground};
  border-radius: 0.4em;
  box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.08),
  0 16px 10px -8px rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.theme.text};
  text-align: center;
`;
