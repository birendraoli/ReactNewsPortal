import React from 'react'
import '../css/Blog.scss'
import thought1 from '../images/thought1.jpg'
import thought2 from '../images/thought2.jpeg'
import thought3 from '../images/thought3.jpeg'
import thought4 from '../images/thought4.jpg'
import All from '../reusable/All'

const Blog = () => {
    return (
        <div className='blog-wrapper'>
            <div className="title-head">
                <h1>विचार/ब्लग</h1>
                <All />
            </div>
            <div className="news-content">
                <div className="card">
                    <div className="img"></div>
                    <img src={thought1} alt="" />
                    <h3>ओलीले प्रधानमन्त्री पाउने सर्तमा संविधान घोषणाका निम्ति सघाउने सौदाबाजी</h3>
                </div>
                <div className="card">
                    <img src={thought2} alt="" />
                    <h3>अटिजम के हो र लक्षण कस्ता हुन्छन् ?</h3>
                </div>
                <div className="card">
                    <img src={thought3} alt="" />
                    <h3>कहिलेसम्म आफ्नै खुट्टामा बञ्चरो प्रहार गरिरहने ?</h3>
                </div>
                <div className="card">
                    <img src={thought4} alt="" />
                    <h3>वन डढेलो : हिउँद महिनाका समस्या</h3>
                </div>
            </div>
        </div>
    )
}

export default Blog