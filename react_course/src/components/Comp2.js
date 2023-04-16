import React from 'react'
import Comp3 from './Comp3'

const Comp2 = (props) => {
  return (
    <>
    <div>Comp2</div>
    <Comp3 data={props.data}/>
    </>
  )
}

export default Comp2