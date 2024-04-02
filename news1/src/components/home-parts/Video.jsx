import React from 'react'
import '../css/Video.scss'
import img1 from '../images/news-img1.jpg'

const Video = () => {
    return (
        <div className='video-wrapper'>
            <div className="title-head">
                <h1>Video/TV</h1>
                <button>All</button>
            </div>
            <div className="contentarea">
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Video