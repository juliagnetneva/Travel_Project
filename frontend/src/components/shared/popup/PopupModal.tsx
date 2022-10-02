import React from "react";
import {Button } from "../buttons/buttons.styled";
import { PopupStyled, PopupOverlay } from "./popup.styled";

type IPopupProps = {
    text: string ,
    buttonName: string,
    handleClickButton: (event: React.MouseEvent) => void,
}

export const PopupModal = ({ text, handleClickButton, buttonName }: IPopupProps) => {
  return (
    <PopupOverlay>
      <PopupStyled>
        <div>{text}</div>
        <Button red onClick={handleClickButton}>{buttonName}</Button>
      </PopupStyled>
    </PopupOverlay>
  );
};
