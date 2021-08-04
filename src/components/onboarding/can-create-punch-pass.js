import React from 'react'
import styled from 'styled-components';

const P = styled.p `
    font-size: 2rem;
`

function CanCreateVirtualPunchPass() {
    return (
        <div>
            <P>Create virtual punch passes for your class.</P>
        </div>
    )
}

export {
    CanCreateVirtualPunchPass
}