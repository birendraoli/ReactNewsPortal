import React from 'react'
import '../css/Trending.scss'
import tr1 from '../images/tr1.jpg'
import tr2 from '../images/tr2.jpg'
import tr3 from '../images/tr3.jpg'
import tr4 from '../images/tr4.jpg'
import All from '../reusable/All'

const Trending = () => {
  return (
    <div className='trending-wrapper'>
        <div className="title-head">
            <h1>लोकप्रिय</h1>
            <All />
        </div>
        <div className="carousel">
            <div className='card'>
                <img src={tr1} alt="" />
                <h3>दाङको आदर्श नमुना मावि परीक्षा केन्द्रमा परीक्षा दिने परीक्षार्थी</h3>
            </div>
            <div className='card'>
                <img src={tr2} alt="" />
                <h3>होलीको रंगमा झुमे पर्यटक (तस्बिरहरु)</h3>
            </div>
            <div className='card'>
                <img src={tr3} alt="" />
                <h3>लालीगुराँसले ढाकिए वनपाखा (फोटो-फिचर)</h3>
            </div>
            <div className='card'>
                <img src={tr4} alt="" />
                <h3>ग्रामीण जीवनशैलीः कहिले घाँसको भारी त कहिले पँधेरी</h3>
            </div>
        </div>
    </div>
  )
}

export default Trending