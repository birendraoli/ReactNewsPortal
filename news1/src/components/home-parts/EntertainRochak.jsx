import React from 'react'
import '../css/EntertainRochak.scss'
import img1 from '../images/news-img1.jpg'

const EntertainRochak = () => {
    return (
        <div className='entertain-rochak'>
            <div className="entertain-wrapper">
                <div className="title-head">
                    <h1>Entertainment</h1>
                    <button>All</button>
                </div>
                <div className="contentarea">
                    <div className="f-news">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
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
            <div className="rochak-wrapper">
                <div className="title-head">
                    <h1>Rochak</h1>
                    <button>All</button>
                </div>
                <div className="contentarea">
                <div className="f-news">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="more-news">
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
            </div>
        </div>
    )
}

export default EntertainRochak