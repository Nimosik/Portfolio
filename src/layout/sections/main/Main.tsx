import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/myphoto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import Typewriter from 'typewriter-effect';

export const Main = () => {
    return (
        <StyledMain id = {"home"}>

            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={"wrap" }>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Tsomaev Nimgir</span></Name>
                        {/*<MainTitle>A web Developer.</MainTitle>*/}
                        <MainTitle>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A web Developer', 'A Fronted Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                }}
                            />
                        </MainTitle>
                    </div>

                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>

    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #d7d5d5;
    
    display: flex;
    


`
const  PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    margin-top: 65px;
    &::before {
        content: "";
        height: 470px;
        border: 5px solid ${Theme.colors.accent};
        width: 360px;
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        @media ${Theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }

    }
    

    
    
`
const Photo = styled.img`
    height: 430px;
    object-fit: cover;
    width: 350px;
    @media  ${Theme.media.mobile} {
      width: 310px;
      height: 380px;
    }  
`

const MainTitle = styled.h1`
    //font-size: 27px;
    //font-weight: 400;
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
    p {
        display: none;
    }
`


const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    //font-family: 'Josefin Sans', sans-serif;
    //font-size: 50px;
    //font-weight: 700;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};
            
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    
    @media  ${Theme.media.mobile} {
        margin: 15px 0 22px;
    }



`
const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`

