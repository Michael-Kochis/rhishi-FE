import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { CanReserveClass } from './can-reserve-class'
import { CanSearchClass } from './can-search-class'
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
`

const OuterContainer = styled.div`
    display:flex;
    justify-content:center;
`

function OnboardClient(props) {
    const { push } = useHistory();
    const { id } = useParams();

    const routeToClient = () =>  {
        push(`/client/${id}`)
    }
    
    return (
        <OuterContainer>
            <StyledContainer>
                <TitleLine as="a client" />
                <CanSearchClass />
                <CanReserveClass />
                <SkipThis id={id} />
                <button onClick={routeToClient}>Continue</button>
            </StyledContainer>
        </OuterContainer>
    )
}

export default OnboardClient