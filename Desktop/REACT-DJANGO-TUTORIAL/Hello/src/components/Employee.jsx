import React from 'react'
const Employee = (props) => {
  return (
    <div>
        <h3>Employee {props.name}</h3>
        <p>{props.role ? props.role : "No job"}</p>
    
    </div>
  )
}

export default Employee