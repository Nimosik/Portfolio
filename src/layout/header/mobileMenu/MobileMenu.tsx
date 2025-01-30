import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";
import {S} from "../HeaderMenu_Styles";
import {Menu} from "../menu/Menu";



export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen)}
    return (
        <S.StyledMobileMenu>

            <S.BurgerButton isOpen = {menuIsOpen} onClick={ onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen = {menuIsOpen} onClick={ ()=>{setmenuIsOpen(false)}}>
                <Menu/>
            </S.MobileMenuPopup>

        </S.StyledMobileMenu>

    );
};


