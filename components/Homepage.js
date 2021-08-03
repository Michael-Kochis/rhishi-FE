import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 1%;
    background-image: url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80');
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
                <h1>Welcome to Anywhere Fitness!</h1>
                <p>Please either</p>
                <button onClick={handleLogin}>Login</button>
                <p>or</p>
                <button onClick={handleRegister}>Register</button>
            </InfoContainer>
        </Container>
    )
}

export default Homepage
