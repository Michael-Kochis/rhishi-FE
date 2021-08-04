import React from 'react'
import styled from 'styled-components';

const P = styled.p `
    font-size: 3rem;
`

function TitleLine(props) {
    const { as } = props;

    return (
        <P>
          As {as}, you can:  
        </P>
    )
}

export {
    TitleLine
}