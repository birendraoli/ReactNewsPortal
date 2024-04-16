import React from 'react'
import '../css/Events.scss'
import evn1 from '../images/evn1.jpg'
import evn2 from '../images/evn2.jpg'
import evn3 from '../images/evn3.jpg'
import evn4 from '../images/evn4.jpg'
import All from '../reusable/All'

const Events = () => {
    return (
        <div className='event-wrapper'>
            <div className="title-head">
                <h1>घटना</h1>
                <All />
            </div>
            <div className="contentarea">
                <div className='card'>
                    <img src={evn1} alt="" />
                    <h3>काभ्रेभिरको सडकमा ‘रक एङ्करिङ’</h3>
                </div>
                <div className='card'>
                    <img src={evn2} alt="" />
                    <h3>धनगढी-दिपायल द्रुतमार्ग धमाधम कालोपत्र हुँदै</h3>
                </div>
                <div className='card'>
                    <img src={evn3} alt="" />
                    <h3>राहदानी बनाउन पोर्चुगलमा ६ सय जनाको आवेदन सङ्कलन</h3>
                </div>
                <div className='card'>
                    <img src={evn4} alt="" />
                    <h3>प्र‘बैरी नबनौँ हामी हाम्रै’</h3>
                </div>
            </div>
        </div>
    )
}

export default Events