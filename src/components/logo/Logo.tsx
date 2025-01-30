import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick = {() => {scroll.scrollToTop()}}>
            <Icon iconId = {'code'}/>
        </a>
    );
};
