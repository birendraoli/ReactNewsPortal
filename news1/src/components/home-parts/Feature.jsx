import React from 'react'
import '../css/Feature.scss'
import img1 from '../images/news-img1.jpg'

const Feature = () => {
    return (
        <div className='feature-wrapper'>
            <div className="feature-content">
                <div className="title-head">
                    <h1>Feature</h1>
                    <button>All</button>
                </div>
                <div className="contentarea">
                    <div className="card">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="card">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="card">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="card">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature