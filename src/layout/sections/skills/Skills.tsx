import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import { Fade } from "react-awesome-reveal";

export const Skills = () => {
    return (
        <StyledSkills id = {'skills'}>

            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap = {"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.3}>
                        <Skill iconId={"code"}
                               title={"HTML"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                        <Skill iconId={"css"}
                               title={"CSS3"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                        <Skill iconId={"figma"}
                               title={"Figma"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                        <Skill iconId={"react"}
                               title={"REACT"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                        <Skill iconId={"styled-components"}
                               title={"STYLED COMPONENTS"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                        <Skill iconId={"typescript"}
                               title={"TYPESCRIPT"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

                    </Fade>

                </FlexWrapper>
            </Container>


        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    position: relative;
    
`





