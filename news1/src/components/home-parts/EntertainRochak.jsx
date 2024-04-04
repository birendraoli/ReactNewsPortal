import React from 'react'
import '../css/EntertainRochak.scss'
import img1 from '../images/news-img1.jpg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.png'

const EntertainRochak = () => {
    return (
        <div className='entertain-rochak'>
            <div className="entertain-wrapper">
                <div className="title-head">
                    <h1>मनोरंजन</h1>
                    <button>सबै</button>
                </div>
                <div className="contentarea">
                    <div className="f-news">
                        <img src={img1} alt="" />
                        <h2>रुसी सेनामा कार्यरत नेपालीको जीवन रक्षाको माग गर्दै प्रदर्शन गर्नेहरु पक्राउ</h2>
                    </div>
                    <div className="more-news">
                        <div className="col">
                            <img src={img2} alt="" />
                            <h2>‘डिग्री माइला’ गीतमा दयाहाङ र आँचलको नोकझोंक</h2>
                        </div>
                        <div className="col">
                            <img src={img3} alt="" />
                            <h2>टाइगर र दिशाको ‘हिरो नम्बर १’ स्थगित</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rochak-wrapper">
                <div className="title-head">
                    <h1>रोचक</h1>
                    <button>सबै</button>
                </div>
                <div className="contentarea">
                <div className="f-news">
                        <img src={img4} alt="" />
                        <h2>विश्वको एउटा यस्तो देश, जहाँ अपराध शुन्य बराबर छ !</h2>
                    </div>
                    <div className="more-news">
                        <div className="col">
                            <img src={img5} alt="" />
                            <h2>१७ पटक गर्भवती भएको नाटक गर्ने इटालियन महिला पक्राउ</h2>
                        </div>
                        <div className="col">
                            <h2>स्पेनकी राजकुमारी सेनामा भर्ना</h2>
                            <img src={img6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntertainRochak