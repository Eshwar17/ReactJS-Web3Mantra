import React from 'react'

const Student = (props) => {
  return (
    <div>
      <h1>Hi {props.name}! You are {props.age} years old!!</h1>
    </div>
  )
}

export default Student
