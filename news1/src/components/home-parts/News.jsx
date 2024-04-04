import React from 'react'
import '../css/News.scss'
import img7 from '../images/img7.jpeg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.png'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img13 from '../images/img13.jpeg'
import img14 from '../images/img14.jpg'
import img15 from '../images/img15.jpg'
import ad1 from '../images/ad1.gif'
import ad2 from '../images/ad2.gif'
import ad3 from '../images/ad3.gif'
const News = () => {
    return (
        <div className='news-wrapper'>
            <div className="news">
                <div className="title-head">
                    <h1>News</h1>
                    <button>All</button>
                </div>
                <div className='f-news'>
                    <div className="feature-img">
                        <img src={img7} alt="" />
                    </div>
                    <div className="news-content">
                        <div className="title">
                            <h2>एकअर्कासँग टाढिँदै प्रियंका र परिणीति</h2>
                        </div>
                        <div className="details">
                            <p>बलिउड अभिनेत्री प्रियंका चोपडा यतिबेला भारतमा छिन् ।
उनी भारत आएपछि होली पाटीमा उपस्थितिदेखि अयोध्यामा राम ललाको दर्शक गर्ने कामसम्म पुरा गरिसकेकी छन् । हालैमात्र उनी आफन्त मन्नारा चोपडाको जन्मदिन पाटीमा पुगेकी थिइन् । प्रियंकाले मन्नाराको परिवारसँग भेटिरहँदा त्यहाँ परिणीति चोपडालाई भने उनले भेटिनन् ।...</p>
                        </div>
                    </div>
                </div>
                <div className="more-news">
                    <div className='more-row'>
                        <div className="col">
                            <img src={img8} alt="" />
                            <h2>गीतकार दावा तामाङको नयाँ गीत ‘आउन नजिक’ सार्वजनिक</h2>
                        </div>
                        <div className="col">
                            <img src={img9} alt="" />
                            <h2>अजय देवगनको ‘शैतान’ अब ओटीटीमा रिलिज हुँदै</h2>
                        </div>
                    </div>
                    <div className='more-row'>
                        <div className="col">
                            <img src={img10} alt="" />
                            <h2>फिल्म ‘बद्री बहादुर’को गीत ‘मेरो जीवनको’ सार्वजनिक</h2>
                        </div>
                        <div className="col">
                            <img src={img11} alt="" />
                            <h2>‘मेरो माया तिम्रो लागि’ भन्दै गरिमा फकाउँदै रुपक</h2>
                        </div>
                    </div>
                    <div className='more-row'>
                        <div className="col">
                            <img src={img12} alt="" />
                            <h2>राजनीतिमा आउने साराको संकेत</h2>
                        </div>
                        <div className="col">
                            <img src={img13} alt="" />
                            <h2>नाउपाकी उपाध्यक्ष रञ्जिताले गरिन् गण्डकी र बागमतीका अध्यक्षलाई निष्काशन</h2>
                        </div>
                    </div>
                    <div className='more-row'>
                        <div className="col">
                            <img src={img14} alt="" />
                            <h2>स्तनको शल्यक्रिया गराउने बेलायती मोडलको मृत्यु</h2>
                        </div>
                        <div className="col">
                            <img src={img15} alt="" />
                            <h2>प्रकाश राज : जो खराब व्यवहारका कारण ६ पटक प्रतिबन्धमा परे</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-side-ad">
                <img src={ad1} alt="" />
                <img src={ad2} alt="" />
                <img src={ad3} alt="" />
            </div>
        </div>
    )
}

export default News