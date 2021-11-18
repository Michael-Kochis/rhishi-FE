import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

function NavBar(props: any) {

    return(
        <div>
            <h1 className="mainHeading">Repair Merchant</h1>
            <FontAwesomeIcon icon ={faPlusSquare} size="3x" color="lime" /> 
        </div>
    );
}

export {
    NavBar
}
        