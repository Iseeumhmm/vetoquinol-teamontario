import React from 'react'

export default (props) => {
    const list = (
        <ul style={{padding: '1rem'}}>
            {props.list.map( (person, i) => (
                <li key={`${i}_name`}>{person.name} - {person.dinner} Dinner</li>
            ))}
        </ul>
    )
    return (
        props.list.length > 0 ? list : <p style={{padding: '1rem'}}>None yet</p>
    )

}