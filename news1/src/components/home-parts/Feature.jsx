import React from 'react'
import '../css/Feature.scss'
import feature1 from '../images/feature1.jpg'
import feature2 from '../images/feature2.jpg'
import feature3 from '../images/feature3.jpg'
import feature4 from '../images/feature4.jpg'

const Feature = () => {
    return (
        <div className='feature-wrapper'>
            <div className="feature-content">
                <div className="title-head">
                    <h1>फिचर</h1>
                    <button>सबै </button>
                </div>
                <div className="contentarea">
                    <div className="card">
                        <img src={feature1} alt="" />
                        <h2>कोरियोग्राफर स्मृति तिमिल्सिना, जो हिरोइन बन्न काठमाडौँ आएकी थिइन्</h2>
                    </div>
                    <div className="card">
                        <img src={feature2} alt="" />
                        <h2>२५ वर्षपछि अम्बिकाको जीवनमा फर्किएको खुसी</h2>
                    </div>
                    <div className="card">
                        <img src={feature3} alt="" />
                        <h2>स्वास्थ्य-सेवाको दुरावस्था देखाउने हुम्लाकी रूप्सी सुनार</h2>
                    </div>
                    <div className="card">
                        <img src={feature4} alt="" />
                        <h2>सामाजिक सञ्जालको थ्रेट कसरी सामना गर्छिन् रश्मिला प्रजापति?</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature