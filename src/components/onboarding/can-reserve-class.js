import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div `
    font-size: 2.2rem;
    padding-top: 2%;
`

function CanReserveClass() {
    return (
        <StyledContainer>
            <p>Can Reserve an open spot in a class.</p>
            <ul>
                <li>can cancel reservations</li>
                <li>can reschedule reservation</li>
            </ul>
        </StyledContainer>
    )
}

export {
    CanReserveClass
}