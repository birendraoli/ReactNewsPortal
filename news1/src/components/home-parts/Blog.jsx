import React from 'react'
import './Blog.scss'
import img1 from './news-img1.jpg'

const Blog = () => {
    return (
        <div className='blog-wrapper'>
            <div className="title-head">
                <h1>Thought/Blog</h1>
                <button>All</button>
            </div>
            <div className="news-content">
                <div className="card">
                    <div className="img"></div>
                    <img src={img1} alt="" />
                    <h3>आफ्नो मृत्यु भयो भनेर झुक्याउने अभिनेत्री पुनम पाण्डेविरुद्ध प्रहरीमा उजुरी</h3>
                </div>
                <div className="card">
                    <img src={img1} alt="" />
                    <h3>आफ्नो मृत्यु भयो भनेर झुक्याउने अभिनेत्री पुनम पाण्डेविरुद्ध प्रहरीमा उजुरी</h3>
                </div>
                <div className="card">
                    <img src={img1} alt="" />
                    <h3>आफ्नो मृत्यु भयो भनेर झुक्याउने अभिनेत्री पुनम पाण्डेविरुद्ध प्रहरीमा उजुरी</h3>
                </div>
                <div className="card">
                    <img src={img1} alt="" />
                    <h3>आफ्नो मृत्यु भयो भनेर झुक्याउने अभिनेत्री पुनम पाण्डेविरुद्ध प्रहरीमा उजुरी</h3>
                </div>
            </div>
        </div>
    )
}

export default Blog