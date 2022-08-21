import React, {useEffect, useState} from 'react';
import '../styles/login.css'
import axiosWithAuth from "../utils/axiosWithAuth";

function PersonaBar(props) {
    const { personaID, personaName } = props.persona;
    // const [personaTrait, setPersonaTrait] = useState([]);

    useEffect(() => {
        // axiosWithAuth().get("/persona-trait/persona/" + personaID)
        //     .then((resp) => {
        //         setPersonaTrait(resp.data)
        //     })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <p>{personaName}    ID={personaID}</p>
            {/*{personaTrait && personaTrait.map((star) => {*/}
            {/*    return <p> {star.traitID} bonus= {star.bonus} max={star.max}  </p>*/}
            {/*})}*/}
            <p>MIG: 3   AGL: 3   VAL: 3   RES: 3   INS: 3   CHA: 3   LOR: 2</p>
        </div>
    );
}

export default PersonaBar;