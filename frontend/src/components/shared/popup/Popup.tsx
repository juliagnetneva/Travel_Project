import React from "react";
import {Button } from "../buttons/buttons.styled";
import { PopupModal, PopupOverlay } from "./popup.styled";

type IPopupProps = {
    text: string,
    handleCloseButton: (event: React.MouseEvent) => void,
}

export const Popup = ({ text, handleCloseButton }: IPopupProps) => {
  return (
    <PopupOverlay>
      <PopupModal>
        <p>{text}</p>
        <Button red onClick={handleCloseButton}>OK</Button>
      </PopupModal>
    </PopupOverlay>
  );
};
