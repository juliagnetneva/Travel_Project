import React, {useState} from 'react';
import {ScrollStyled} from "./scrollToTop.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowUp} from "@fortawesome/free-solid-svg-icons/faCircleArrowUp";

export const ScrollToTop = () => {
    const [scrollState, setScrollState] = useState<boolean>(false);
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    });
    return (
        <ScrollStyled onClick={toTop} scrollState={scrollState}>
            <FontAwesomeIcon icon={faCircleArrowUp} />
        </ScrollStyled>
    );
};
