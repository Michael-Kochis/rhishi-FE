import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div `
    font-size: 2.2rem;
    padding-top: 2%;

    ul {
        margin-left:20%;
    }
`

function CanSearchClass() {
    return (
        <StyledContainer>
            <p>Search for classes by any of the following criteria:</p>
            <ul id="create-class-list">
                <li>Time and Date</li>
                <li>Type</li>
                <li>Duration</li>
                <li>Intensity Level</li>
                <li>Location</li>
            </ul>
        </StyledContainer>
    )
}

export {
    CanSearchClass
}