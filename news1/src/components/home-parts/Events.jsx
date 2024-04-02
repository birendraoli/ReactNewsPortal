import React from 'react'
import '../css/Events.scss'
import img1 from '../images/news-img1.jpg'

const Events = () => {
    return (
        <div className='event-wrapper'>
            <div className="title-head">
                <h1>Ghatana</h1>
                <button>All</button>
            </div>
            <div className="contentarea">
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

export default Events