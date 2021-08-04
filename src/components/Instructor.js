import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router';
import { fetchClasses } from '../actions/Actions';
import { connect } from 'react-redux';

import styled, { keyframes } from 'styled-components';

const KF = keyframes`
    from {
        transform:translateY(100%)
    }
    to {
        transform: translateY(0);
    }
`

const OuterContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
    animation: ${KF} 1.5s ease-in-out forwards;
`

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 5px 2px rgb(168, 167, 167);
    background-image: linear-gradient(to bottom right, green, #95ce95);
    padding: 2% 0;
    width: 40%;
    margin: 3%;
    font-family: 'Fira Sans Condensed', sans-serif;

    p {
        font-size: 1.9rem;
        color: black;
        font-weight: 600;
    }

    h2 {
        text-decoration: underline;
        font-size: 2.5rem;
        color: black;
    }

    button{
        padding:3%;
        width:200px;
        font-size:1.7rem;
        font-weight: 600;
        background:none;
        border-color:blue;
        opacity: 0.5;
        margin-top:20%;

        &:hover{
            filter: brightness(1.8);
            opacity:1;
        }
    }
`

const IntroStyles = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 3.5rem;
        text-align: center;
        padding-top: 3%;
    }

    button{
        padding:0.8%;
        width:6%;
        width: 180px;
    }

    h2{
        font-size: 2.8rem;
        margin-top: 5%;
    }
`

const Instructor = (props) => {
    const { push } = useHistory();
    const { id } = useParams();
    const { classes, fetchClasses } = props;

    useEffect(() => {
        fetchClasses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const handleDeleteClick = (item) => {
        axiosWithAuth().delete(`/classes/${item.classId}`)
             .then(res => {
                //  console.log(res);
                //  console.log(id);
                 fetchClasses();
             })
             .catch(err => {
                 console.log(err);
             })       
}

    return (
        <div>
            <IntroStyles>
                <h1>Hi Instructor!</h1>
                <button onClick={() => push(`/addclass/${id}`)}>Add a Class?</button>
                <h2>Upcoming Classes:</h2>
            </IntroStyles>
            <OuterContainer>
                {classes.filter(item => 
                    // eslint-disable-next-line
                    item.userId == id
                ).map(item => {
                    return(
                        <InnerContainer key={item.classId}>
                            {<h2>{item.name}: {item.type}.</h2>}
                            <p>Starts at {item.startTime} and goes for {item.duration} minute(s).</p>
                            <p>Located in: {item.location}. Intensity level: {item.intensityLevel}</p>
                            <p>Current Attendance Total: {item.attendees}</p>
                            <p>Max Class Size: {item.maxClassSize}</p>
                            <span>
                                <button onClick={() => {push(`/editclass/${item.userId}`)}}>Edit Class</button>
                                <button onClick={() => handleDeleteClick(item)}>Delete Class</button>
                                <button>Take Attendance</button>
                            </span>
                            
                        </InnerContainer>
                    )
                })}
            </OuterContainer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, { fetchClasses })(Instructor);