import React from 'react'
import '../css/BannerNews.scss'
import img1 from '../images/img1.jpg'
import imgg2 from '../images/imgg2.jpg'
import Author from '../reusable/Author';
import Timer from '../reusable/Timer';

const BannerNews = () => {
    return (
        <div className='banner-wrapper'>
            <div className="title-news">
                <div className='news-title'>
                    <h2>पेट्रोलमा प्रतिलिटर ४ रुपैयाँ मूल्यवृद्धि</h2>
                </div>
                <div className='auth-time'>
                    <Author />
                    <Timer />
                </div>
            </div>
            <div className="banner-news">
                <div className='news-title'>
                    <h2>‘डिग्री माइला’द्वारा गफाडी प्रतियोगिता आयोजना</h2>
                </div>
                <div className='auth-time'>
                    <Author />
                    <Timer />
                </div>
                <div className='banner-img'>
                    <img src={imgg2} alt="" />
                </div>
                <div className='news-info'>
                    <p>चैत ३० गतेदेखि प्रदर्शन तयारीमा रहेको फिल्म ‘डिग्री माइला : एमए थर्ड क्लास’ले गफाडी प्रतियोगिता आयोजना गरेको छ । प्रतिस्पर्धामा सहभागि हुन चाहनेले डिग्री माइला पात्र बनेर, आफ्नै बारेमा गफ दिएर भिडियो पठाउनुपर्नेछ ।</p>
                </div>
            </div>
            <div className="banner-news">
                <div className='news-title'>
                    <h2>‘डिग्री माइला’द्वारा गफाडी प्रतियोगिता आयोजना</h2>
                </div>
                <div className='auth-time'>
                    <Author />
                    <Timer />
                </div>
                <div className='banner-img'>
                    <img src={img1} alt="" />
                </div>
                <div className='news-info'>
                    <p>चैत ३० गतेदेखि प्रदर्शन तयारीमा रहेको फिल्म ‘डिग्री माइला : एमए थर्ड क्लास’ले गफाडी प्रतियोगिता आयोजना गरेको छ । प्रतिस्पर्धामा सहभागि हुन चाहनेले डिग्री माइला पात्र बनेर, आफ्नै बारेमा गफ दिएर भिडियो पठाउनुपर्नेछ ।</p>
                </div>
            </div>
        </div>
    )
}

export default BannerNews