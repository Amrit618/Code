import React from 'react'
import Person from'./Person'


function NameList() {
    const persons=[
        {
            id:1,
            name: 'Amrit',
            age: 27,
            skill:'react'
        },
        {
            id:2,
            name: 'Ankit',
            age: 27,
            skill:'react-native'

        },
        {
            id:1,
            name: 'Dipesh',
            age: 23,
            skill:'All'
        }
    ]
    const personList=persons.map(person=> <Person person={person}/>)
    return ( 
        <div>
            {personList}
        </div>
    )
}
export default NameList


    