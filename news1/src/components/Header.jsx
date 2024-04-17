import React from 'react'
import './Header.scss'
import logo from './logo.png'
import banner from './banner.gif'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='logo'>
        <Link to='http://localhost:3000/'>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className='header-ad'>
        <Link to='https://www.linkedin.com/in/birendraoli/'>
          <img src={banner} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Header