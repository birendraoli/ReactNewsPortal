import React from 'react'
import '../css/Video.scss'
import tv1 from '../images/tv1.jpeg'
import tv2 from '../images/tv2.jpg'
import tv3 from '../images/tv3.jpeg'
import tv4 from '../images/tv4.jpg'
import All from '../reusable/All'

const Video = () => {
    return (
        <div className='video-wrapper'>
            <div className="title-head">
                <h1>भिडियो</h1>
                <All />
            </div>
            <div className="contentarea">
                <div className="img">
                    <img src={tv1} alt="" />
                </div>
                <div className="img">
                    <img src={tv2} alt="" />
                </div>
                <div className="img">
                    <img src={tv3} alt="" />
                </div>
                <div className="img">
                    <img src={tv4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Video