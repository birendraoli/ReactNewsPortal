import React from 'react'
import '../css/EduTourism.scss'
import img1 from '../images/news-img1.jpg'

const EduTourism = () => {
    return (
        <div className='edu-tourism'>
            <div className="edu-wrapper">
                <div className="title-head">
                    <h1>Education</h1>
                    <button>All</button>
                </div>
                <div className="contentarea">
                    <div className="col">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="col">
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                        <img src={img1} alt="" />
                    </div>
                    <div className="col">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="col">
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
            <div className="tourism-wrapper">
                <div className="title-head">
                    <h1>Tourism</h1>
                    <button>All</button>
                </div>
                <div className="contentarea">
                    <div className="f-news">
                        <div className="feature-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="details">
                            <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EduTourism