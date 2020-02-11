import React from 'react'

export default (props) => {
    const list = (
        <ol style={{padding: '0 3rem'}}>
            {props.list.map( (person, i) => (
                <li key={`${i}_name`}>{person.name} - {person.dinner} Dinner</li>
            ))}
        </ol>
    )
    return (
        props.list.length > 0 ? list : <p style={{padding: '3rem'}}>None yet</p>
    )
}