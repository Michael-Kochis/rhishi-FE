import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function Dashboard(props) {
    const [persona, setPersona] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/persona")
            .then((resp) => {
                setPersona(resp.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);  

    return (
        <div>
            {persona && persona.map((star) => {
                return <p>{star.personaName}</p>
            })}
        </div>
    )
}

export {
    Dashboard
}