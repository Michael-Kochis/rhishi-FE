import React, { useEffect, useState } from 'react';

import HexGridDemo from './Grid';
import PersonaBar from './PersonaBar';
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
                return <PersonaBar key={star.personaID} persona={star} />
            })}
            <HexGridDemo />
        </div>
    )
}

export {
    Dashboard
}