import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
            <StyledContact id = {"contact"}>

                <Container>
                    <SectionTitle>Contact</SectionTitle>
                    <StyledForm>
                        <Field placeholder={"name"}/>
                        <Field placeholder={"subject"}/>
                        <Field placeholder={"message"} as = "textarea"/>
                        <Button type = {"submit"}>send message</Button>
                    </StyledForm>
                </Container>

            </StyledContact>

    );
};

const StyledContact = styled.section`
    position: relative;

`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
    align-items: center;
    textarea {
        resize: none;
        height: 155px;
    }

`

const Field = styled.input`
    
    width: 100%;
    background-color: ${Theme.colors.secondaryBg};
    border: 1px solid ${Theme.colors.borderColor};
    padding: 7px 15px;

    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    
    color: ${Theme.colors.font};
    
    &::placeholder {
        color: ${Theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 2px solid ${Theme.colors.borderColor};
    }

`


