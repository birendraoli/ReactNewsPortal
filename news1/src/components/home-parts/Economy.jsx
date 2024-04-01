import React from 'react'
import './Economy.scss'
import img1 from './news-img1.jpg'

const Economy = () => {
    return (
        <div className='economy-wrapper'>
            <div className="title-head">
                <h1>Aarthik</h1>
                <button>All</button>
            </div>
            <div className="news-content">
                <div className="f-news">
                    <div className="feature-img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="title">
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="details">
                        <p>१९ चैत, काठमाडौं । रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै सिंहदरबार अगाडि प्रदर्शन गर्नेहरुलाई प्रहरीले नियन्त्रणमा लिएको छ । रुसी सेनामा रहेका नागरिकको जीवन रक्षाको लागि सचेतना...</p>
                    </div>
                </div>
                <div className="more-news">
                    <div className="col">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="col">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="col">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="col">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Economy