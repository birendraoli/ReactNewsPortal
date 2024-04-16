import React from 'react'
import writer from './writer.jpeg'
import './Author.scss'

const Author = () => {
  return (
    <div className='author'>
        <img src={writer} alt="" />
        <p>Bherionline</p>
    </div>
  )
}

export default Author