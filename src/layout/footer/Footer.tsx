import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Nimgir</Name>

                <SocialList>

                    <SocialItem>
                        <SocialLink>
                            <Icon  height={"21px"} width={"21px"} viewBox={"0 0 21px"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon  height={"21px"} width={"21px"} viewBox={"0 0 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon  height={"21px"} width={"21px"} viewBox={"0 0 21px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon  height={"21px"} width={"21px"} viewBox={"0 0 21px"} iconId={"vk-logo"}/>
                        </SocialLink>
                    </SocialItem>

                </SocialList>

                <Copyright>© 2024 Tsomaev Nimgir, All Rights Reserved.</Copyright>

            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 0;
    position: relative;
`
const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
    
`
const SocialItem = styled.li`
    

`
const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${Theme.animation.transition};
    
    color: ${Theme.colors.accent};
    
    &:hover {
        color: ${Theme.colors.primaryBg};
        transform: translateY(-4px);
    }

`
const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
`