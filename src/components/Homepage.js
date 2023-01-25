import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 1%;
    height:90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    opacity: 95%;
    border: 2px #3a3a3a solid;
    background-color: white;
    width: 40%;

    h1 {
        font-size: 4.5rem;
        color: black;
        font-family: 'Balsamiq Sans', cursive;
    }

    p {
        font-size: 2.5rem;
        color: black;
        font-family: 'Balsamiq Sans', cursive;
    }

    button {
        padding: .5%;
        font-family: 'Balsamiq Sans', cursive;
        font-size:1.8rem;
    }
`

function Homepage() {
    const { push } = useHistory();

    const handleRegister = () => {
        push('/register')
    }

    const handleLogin = () => {
        push('/login')
    }

    return (
        <Container>
            <InfoContainer>
                <h1>Welcome to Kira Games!</h1>
                <p>Please either</p>
                <p>$process.env.NEO_URI</p>
                <div>
                    <button onClick={handleLogin}>Login</button>
                    or
                    <button onClick={handleRegister}>Register</button>
                </div>
            </InfoContainer>
        </Container>
    )
}

export default Homepage
