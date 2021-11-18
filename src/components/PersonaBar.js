import React from 'react';
import '../styles/login.css'

function PersonaBar(props) {
    const { personaID, personaName } = props.persona;

    return (
        <div>
            <p>{personaName}    ID={personaID}</p>
        </div>
    );
}

export default PersonaBar;