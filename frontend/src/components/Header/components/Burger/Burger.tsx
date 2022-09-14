import React, { useState } from "react";
import { BurgerStyled } from "./burger.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Burger = () => {
  const [open, setOpen] = useState<any>(false);
  return (
    <>
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerStyled>
      <BurgerMenu open={open} setOpen={setOpen} />
    </>
  );
};
