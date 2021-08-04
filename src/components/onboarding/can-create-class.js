import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div `
    font-size: 2.2rem;
    padding-top: 2%;

    ul {
        margin-left:20%;
    }
`

function CanCreateClass() {
    return (
        <StyledContainer id="can-create-class">
            <p>Create a class with the following information: </p>
            <ul id="create-class-list">
                <li>Class Name</li>
                <li>Type</li>
                <li>Time and Date</li>
                <li>Duration</li>
                <li>Intensity Level</li>
                <li>Location</li>
                <li>Maximum Class Size</li>
            </ul>
            <p>You may also edit and delete these classes!</p>
        </StyledContainer>
    )
}

export {
    CanCreateClass
}