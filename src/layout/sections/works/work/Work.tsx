import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {Theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string

}


export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src = {props.src} alt = ""/>
                <Button>view project</Button>
            </ImageWrapper>


            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link active href = {"#"}>demo</Link>
                <Link href = {"#"}>code</Link>
            </Description>

        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${Theme.colors.secondaryBg};
    
    //width: 330px;
    //flex-grow: 1;
    ${Link} {
        & + ${Link} {
            margin-left: 20px;
            
        }
    }

`

const ImageWrapper = styled.div`
    position: relative;
    
    &:hover {
        ${Button} {
            opacity: 1;
        }
    }
    @media ${Theme.media.desktop} {
        max-width: 540px;
    }
    
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%; 
        transform: translate(-50%, -40%);
        transition: ${Theme.animation.transition};
        
        
        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${Theme.animation.transition};
    }
    
    &:hover {
        &::before {
            opacity: 1;
            
        }
        
        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @media ${Theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        
        ${Button} {
            opacity: 1;
        }
    }
    
`




const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
     
`


const Title = styled.h3`

`

const Text = styled.p`
    margin: 14px 0 10px;
`

const Description = styled.div`
    padding: 25px 20px;
`

