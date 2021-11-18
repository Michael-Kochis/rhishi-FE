import React from 'react'
import { NewGameButton } from './NewGameButton'

function NavBar(props: any) {

    return(
        <div>
            <h1 className="mainHeading">Repair Merchant</h1>
            <NewGameButton /> 
        </div>
    );
}

export {
    NavBar
}
        