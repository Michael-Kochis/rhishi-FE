import React from 'react';

function PersonaBar(props) {
    const { personaID, personaName } = props.persona;

    return (
        <div>
            <p>{personaName}</p>
            <p>{personaID}</p>
        </div>
    );
}

export default PersonaBar;