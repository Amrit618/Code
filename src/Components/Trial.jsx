import React from 'react'
import {useState} from 'react'
function Trial() {
    const[ state, setState]=useState(0)

    return (
        <>
           <h1> Count- {state+1}</h1> 
        </>
    )
}

export default Trial
