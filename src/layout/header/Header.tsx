import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from "./HeaderMenu_Styles";




export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize",handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu/>
                                        : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

