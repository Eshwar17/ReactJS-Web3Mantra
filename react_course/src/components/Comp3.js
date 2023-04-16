import React, {useContext} from 'react'
import { AppState } from '../App'

const Comp3 = () => {
    const appData = useContext(AppState)
  return (
    <div className='comp3'>
    <div>Comp3</div>
    <h1>{appData}</h1>
    </div>
  )
}

export default Comp3