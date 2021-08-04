import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchClasses } from '../actions/Actions';
import Loader from 'react-loader-spinner';
import styled, { keyframes } from 'styled-components';

import '../styles/Client.css';

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

    h3 {
        font-size: 1.9rem;
        color: black;
    }

    h2 {
        text-decoration: underline;
        font-size: 2.5rem;
        color: black;
    }

    button{
        padding:8%;
        width:180px;
        font-size:1.7rem;
        font-weight: 600;
        background:none;
        border-color:blue;
        opacity: 0.5;
        border-radius: 100px;
        margin-top:20%;

        &:hover{
            filter: brightness(1.8);
            opacity:1;
        }
    }
`

const H1 = styled.h1`
    font-size: 3rem;
    text-align: center;
    padding-top: 3%;
`

const H4 = styled.h4`
    font-size: 2rem;
`

const Client = (props) => {
    const { fetchClasses, classes, isFetching } = props
    const [search1, setSearch1] = useState('')
    const [search2, setSearch2] = useState('')
    const [search3, setSearch3] = useState('')
    const [search4, setSearch4] = useState('')
    const [search5, setSearch5] = useState('')
    const [search6, setSearch6] = useState('')
    
    useEffect(() => {
      fetchClasses();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChange1 = e => {
        setSearch1(e.target.value)
    }
    const onChange2 = e => {
        setSearch2(e.target.value)
    }
    const onChange3 = e => {
        setSearch3(e.target.value)
    }
    const onChange4 = e => {
        setSearch4(e.target.value)
    }
    const onChange5 = e => {
        setSearch5(e.target.value)
    }
    const onChange6 = e => {
        setSearch6(e.target.value)
    }

    const filter1 = val => {
        if(search1 === '') {
            return val
        }else if (val.name.toLowerCase().includes(search1.toLowerCase())) {
            return val
    }}
    const filter2 = val => {
        if(search2 === 0) {
            return val
        }else if (val.startTime.includes(search2.charAt(0,1))) {
            return val
    }}
    const filter3 = val => {
        if(search3 === '') {
            return val
        }else if (val.duration.includes(search3)) {
            return val
    }}
    const filter4 = val => {
        if(search4 === '') {
            return val
        }else if (val.type.toLowerCase().includes(search4.toLowerCase())) {
            return val
    }}
    const filter5 = val => {
        if(search5 === '') {
            return val
        }else if (val.intensityLevel.toLowerCase().includes(search5.toLowerCase())) {
            return val
    }}
    const filter6 = val => {
        if(search6 === '') {
            return val
        }else if (val.location.toLowerCase().includes(search6.toLowerCase())) {
            return val
    }}
  
    return (
      <div>
        <div className="search-box">
            <H4>Search for Classes:</H4>
            <input className="search" type="text" placeholder="Filter by name.." onChange={onChange1}/>
            <input className="search" type="time" placeholder="Filter by time.." onChange={onChange2}/>
            <input className="search" type="number" placeholder="Filter by duration..." onChange={onChange3}/>
            <input className="search" type="text" placeholder="Filter by type..." onChange={onChange4}/>
            <input className="search" type="text" placeholder="Filter by intensity level..." onChange={onChange5}/>
            <input className="search" type="text" placeholder="Filter by location..." onChange={onChange6}/>
        </div>
        <H1>Classes Available to Join:</H1>
          {isFetching && (
              <div className="spinner">
                <Loader type="Puff" color="#204963" height="60" width="60" />
                <p>Loading Data...</p>
              </div>
            )}
        <OuterContainer>
            {classes.filter(filter1).filter(filter2).filter(filter3)
            .filter(filter4).filter(filter5).filter(filter6).map((item) => {
            return (
                <InnerContainer key={item.classId}>
                    <h2>{item.name}</h2>
                    <h3>Class Type: {item.type}</h3>
                    <h3>Start Time: {item.startTime}</h3>
                    <h3>Intensity Level: {item.intensityLevel}</h3>
                    <h3>Duration: {item.duration} minute(s)</h3>
                    <h3>Location: {item.location}</h3>
                    <h3>Attendees: {item.attendees}</h3>
                    <h3>Max Class Size: {item.maxClassSize}</h3>
                    <div className="button">
                        <button onClick={() => {alert('You have been added to this class!')}}>Join this class!</button>
                    </div>
                </InnerContainer>
            );
            })}
        </OuterContainer>
      </div>
    );
  };

  const mapStateToProps = state => {
      return {
          classes: state.classes,
          isFetching: state.isFetching,
          error: state.error
      }
  }

  export default connect(mapStateToProps, { fetchClasses })(Client);