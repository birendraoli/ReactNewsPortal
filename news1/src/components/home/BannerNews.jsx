import React from 'react'
import './BannerNews.scss'
import { FcBusinesswoman } from "react-icons/fc";
import { IoIosTimer } from "react-icons/io";
import img1 from './img1.jpg'

const BannerNews = () => {
    return (
        <div className='banner-wrapper'>
            <div className="title-news">
                <div className='news-title'>
                    <h2>पेट्रोलमा प्रतिलिटर ४ रुपैयाँ मूल्यवृद्धि</h2>
                </div>
                <div className='news-content'>
                    <p className="author"> <FcBusinesswoman /> bherisanchar</p>
                    <p className="timeupdate"> <IoIosTimer /> 5 minute ago</p>
                </div>
            </div>
            <div className="banner-news">
                <div className='news-title'>
                    <h2>‘डिग्री माइला’द्वारा गफाडी प्रतियोगिता आयोजना</h2>
                </div>
                <div className='news-content'>
                    <p className="author"> <FcBusinesswoman /> bherisanchar</p>
                    <p className="timeupdate"> <IoIosTimer /> 5 minute ago</p>
                </div>
                <div className='banner-img'>
                    <img src={img1} alt="" />
                </div>
                <div className='news-info'>
                    <p>चैत ३० गतेदेखि प्रदर्शन तयारीमा रहेको फिल्म ‘डिग्री माइला : एमए थर्ड क्लास’ले गफाडी प्रतियोगिता आयोजना गरेको छ । प्रतिस्पर्धामा सहभागि हुन चाहनेले डिग्री माइला पात्र बनेर, आफ्नै बारेमा गफ दिएर भिडियो पठाउनुपर्नेछ ।</p>
                </div>
            </div>
            <div className="banner-news">
                <div className='news-title'>
                    <h2>‘डिग्री माइला’द्वारा गफाडी प्रतियोगिता आयोजना</h2>
                </div>
                <div className='news-content'>
                    <p className="author"> <FcBusinesswoman /> bherisanchar</p>
                    <p className="timeupdate"> <IoIosTimer /> 5 minute ago</p>
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