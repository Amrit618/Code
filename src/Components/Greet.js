import React from 'react'
import Welcome from'./Welcome'

function Greet({name,heroName}) {
    return (
        <div>
            <h1>{name} is a {heroName} </h1>
        </div>
    )
}

export default Greet
