import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import './../../styles/slider.css'


type SlidePropsType = {
    text: string
    userName: string
}
const Slide = (props: SlidePropsType) => {
    return  (
        <StyledSlider>
            <Text>{props.text}</Text>
            <Name>@{props.userName}</Name>
    </StyledSlider>
    )
}

const items = [
    <Slide userName = {"Ivanov Ivan"}
        text = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
    <Slide userName = {"Piotr petrov"}
        text = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide userName = {"igor igorev"}
        text = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur a dipisicing elit.'} />,

];

export const Slider = () => (

    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>

);


//
// export const Slider = () => {
//     return (
//         <StyledSlider>
//             <FlexWrapper>
//             </FlexWrapper>
//
//             <Pagination>
//                 <span> </span>
//                 <span className={"active"}> </span>
//                 <span> </span>
//             </Pagination>
//
//         </StyledSlider>
//     );
// };
//
const StyledSlider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Text = styled.div`


`

const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 42px;

    display: inline-block;
`




