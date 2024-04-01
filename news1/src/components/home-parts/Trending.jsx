import React from 'react'
import './Trending.scss'
import img1 from './news-img1.jpg'

const Trending = () => {
  return (
    <div className='trending-wrapper'>
        <div className="title-head">
            <h2>Trending</h2>
        </div>
        <div className="carousel">
            <div className='card'>
                <img src={img1} alt="" />
                <h3>प्रकाश सपुत डेब्यु फिल्म ‘परदेशी २’ अहिलेसम्मको कमाइ कति?</h3>
            </div>
            <div className='card'>
                <img src={img1} alt="" />
                <h3>प्रकाश सपुत डेब्यु फिल्म ‘परदेशी २’ अहिलेसम्मको कमाइ कति?</h3>
            </div>
            <div className='card'>
                <img src={img1} alt="" />
                <h3>प्रकाश सपुत डेब्यु फिल्म ‘परदेशी २’ अहिलेसम्मको कमाइ कति?</h3>
            </div>
            <div className='card'>
                <img src={img1} alt="" />
                <h3>प्रकाश सपुत डेब्यु फिल्म ‘परदेशी २’ अहिलेसम्मको कमाइ कति?</h3>
            </div>
        </div>
    </div>
  )
}

export default Trending