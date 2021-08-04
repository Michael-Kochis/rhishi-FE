import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { CanCreateClass } from './can-create-class'
import { CanCreateVirtualPunchPass } from './can-create-punch-pass'
import { SkipThis } from './skip-this'
import { TitleLine } from './title-line'
import styled from 'styled-components';

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 80vh;
    margin-top:2%;
    width:40%;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 5px 2px rgb(168, 167, 167);
    background-image: linear-gradient(to bottom right, green, #95ce95);

    h3 {
        font-size: 1.6rem;
    }

    button{
        padding:1.1em;
        border:0.16em solid #FFFFFF;
        margin-top: 3%;
        text-transform:uppercase;
        font-family:'Roboto',sans-serif;
        font-weight:400;
        color:#FFFFFF;
        background:none;
        width:180px;

        &:hover {
            color:#DDDDDD;
            border-color:#DDDDDD;
        }
    }

    h3{
        color:white;
    }
`

const OuterContainer = styled.div`
    display:flex;
    justify-content:center;
`

function OnboardInstructor(props) {
    const { push } = useHistory();
    const { id } = useParams();

    const routeToInstructor = () =>  {
        push(`/instructor/${id}`)
    }

    return (
        <OuterContainer>
            <StyledContainer>
                <TitleLine as="an instructor" />
                <CanCreateClass />
                <h3>and</h3>
                <CanCreateVirtualPunchPass />
                <SkipThis id={id} />
                <button onClick={routeToInstructor}>Continue</button>
            </StyledContainer>
        </OuterContainer>
    )
}

export default OnboardInstructor