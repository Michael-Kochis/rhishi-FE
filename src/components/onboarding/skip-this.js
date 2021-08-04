import React from 'react'
import styled from 'styled-components';
import axiosWithAuth from '../../utils/axiosWithAuth';

const StyledContainer = styled.div `
    font-size: 1.8rem;
    margin-top: 8%;
`

function SkipThis(props) {
    const { id } = props;

    const update = () => {
        axiosWithAuth().patch(`/users/${id}`, {skip : 1})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log({err});
            })
    }

    return (
        <StyledContainer>
            <button onClick={update}>Never Show This Again!</button>
        </StyledContainer>
    )
}

export {
    SkipThis
}