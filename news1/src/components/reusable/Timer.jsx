import React from 'react'
import './Timer.scss'
import { IoIosTimer } from "react-icons/io";

const Timer = () => {
  return (
    <div className='timer'>
        <IoIosTimer className='time-icon'/>
        <p>30 minute ago</p>
    </div>
  )
}

export default Timer