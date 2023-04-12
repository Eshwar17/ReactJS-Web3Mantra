import React from 'react'
import propTypes from 'prop-types'

const Student = (props) => {
  return (
    <div>
      <h1>Hi {props.name}! You are {props.age} years old!!</h1>
    </div>
  )
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
}

export default Student
