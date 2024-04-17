import React from 'react'
import './Footer.scss'
import logo from './logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-wrapper">
            <div className="f-1">
                <img src={logo} alt="" />
            </div>
            <div className='f-2'>
                <p>अध्यक्ष तथा प्रबन्ध निर्देशक:</p>
                <h4>बिरेन्द्र ओली</h4>
            </div>
            <div className='f-3'>
                <p>प्रधान सम्पादकः</p>
                <h4>संजिता पौडेल</h4>
            </div>
            <div className='f-4'>
                <p>सूचना विभाग दर्ता नं.:</p>
                <h4>001-075/76</h4>
            </div>
            <div className='f-5'>
                <p>+977 9851276131</p>
                <p>techchuli@gmail.com</p>
            </div>
            <div className='f-6'>
                <p>© 2021 - 2024 techchuli.com सर्वाधिकार सुरक्षित</p>
            </div>
        </div>
    </div>
  )
}

export default Footer