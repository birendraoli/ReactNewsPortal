import React from 'react'
import './Header.scss'
import logo from './logo.png'
import banner from './banner.gif'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='header-ad'>
            <img src={banner} alt=""/>
        </div>
    </div>
  )
}

export default Header