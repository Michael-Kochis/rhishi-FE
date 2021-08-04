import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import styled from 'styled-components';

const OuterContainer = styled.form`
    display:flex;
    flex-wrap:nowrap;
    justify-content:center;
    align-items: center;
    width:100%;
    height: 80vh;
`

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 4px;
    padding: 2% 0;
    width: 40%;
    margin: 3%;
    margin-top:10%;
    font-family: 'Fira Sans Condensed', sans-serif;
    max-height:80vh;

    h2 {
        font-size: 2.5rem;
        color: white;
        margin-bottom:8%;
    }

    label {
      font-size:1.8rem;
      display:block;
      padding-bottom: 8%;
      width:400px;
      color:black;
    }

    input, select{
      display:block;
      padding:2%;
      width:500px;
    }

    button{
        padding:3%;
        width:150px;
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

const Label = styled.label`
  &:focus-within {
    color: white;
    }
`

const initialFormValues = {
    name: '',
    type: '',
    startTime: '',
    duration: 0,
    intensityLevel: '',
    location: '',
    attendees: 0,
    maxClassSize: 0,
    userId: '',
};



const EditClassForm = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth().get(`/classes/${id}`)
            .then(res => {
                //console.log(res.data);
                setFormValues(res.data);
            })
            .catch(err => {
                console.log('ERROR', err);
            })
    }, [id])

    const onSubmit = (evt) => {
        evt.preventDefault();

        const itemToBeSubmit = {
            name: formValues.name.trim(),
            type: formValues.type.trim(),
            startTime: formValues.startTime,
            duration: formValues.duration.trim(),
            intensityLevel: formValues.intensityLevel.trim(),
            location: formValues.location.trim(),
            attendees: formValues.attendees,
            maxClassSize: formValues.maxClassSize,
            userId: id,
        }

        axiosWithAuth().put(`/classes/${id}`, itemToBeSubmit)
            .then(res => {
                //console.log(res);
                push(`/instructor/${id}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({...formValues, [name] : value })
      };


    const handleCancel = (id) => {
        push(`/instructor/${id}`);
      }


    return (
        <OuterContainer onSubmit={onSubmit}>
        <InnerContainer>
          <h2>Edit your Class:</h2>
          <div>
            {/* <div className="error">{formErrors.name}</div> */}
            <Label>
              Name of Class&nbsp;
              <input
                type="text"
                value={formValues.name}
                onChange={onChange}
                name="name"
                placeholder="enter class name here.."
              />
            </Label>
          </div>
          <div>
            {/* <div className="error">{formErrors.type}</div> */}
            <Label>
              Class Type:&nbsp;
              <input
                type="text"
                value={formValues.type}
                onChange={onChange}
                name="type"
                placeholder="enter type of class here.."
              />
            </Label>
          </div>
          <div>
            {/* <div className="error">{formErrors.startTime}</div> */}
            <Label>
              Choose a start time:&nbsp;
              <input
                type="time"
                value={formValues.startTime}
                onChange={onChange}
                name="startTime"
              />
            </Label>
          </div>
          <div>
            {/* <div className="error">{formErrors.duration}</div> */}
            <Label>
              Duration (in minutes):&nbsp;
              <input
                type="text"
                value={formValues.duration}
                onChange={onChange}
                name="duration"
              />
            </Label>
          </div>
          <div>
            {/* <div className="error">{formErrors.intensityLevel}</div> */}
            <Label>
              Intensity Level:&nbsp;
              <select value={formValues.intensityLevel} name="intensityLevel" onChange={onChange}>
                <option value=''>-- Select an Intensity Level --</option>
                <option value='Beginner'>Beginner</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Advanced'>Advanced</option>
              </select>
            </Label>
          </div>
          <div>
            {/* <div className="error">{formErrors.location}</div> */}
            <Label>
              Location:&nbsp;
              <input
                type="text"
                value={formValues.location}
                onChange={onChange}
                name="location"
                placeholder="enter location here.."
              />
            </Label>
          </div>
          <div>
            {/* <div className="error">{formErrors.attendees}</div> */}
            <Label>
              Current Registered Attendees:&nbsp;
              <input
                type="number"
                value={formValues.attendees}
                onChange={onChange}
                name="attendees"
              />
            </Label>
          </div>
          <div>
            {/* <div className="error">{formErrors.maxClassSize}</div> */}
            <Label>
              Max Class Size:&nbsp;
              <input
                type="number"
                value={formValues.maxClassSize}
                onChange={onChange}
                name="maxClassSize"
              />
            </Label>
          </div>
          <div>
            <button>Update</button>
            <button onClick={() => handleCancel(formValues.userId)}>Cancel</button>
          </div>
        </InnerContainer>
      </OuterContainer>
    )
}

export default EditClassForm;