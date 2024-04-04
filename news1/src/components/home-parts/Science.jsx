import React from 'react'
import '../css/Science.scss'
import sci1 from '../images/sci1.jpg'
import sci2 from '../images/sci2.jpg'
import sci3 from '../images/sci3.jpeg'
import sci4 from '../images/sci4.jpg'
import sci5 from '../images/sci5.jpg'
import sci6 from '../images/sci6.jpg'
import lu1 from '../images/lu1.jpg'
import lu2 from '../images/lu2.jpg'
import lu3 from '../images/lu3.jpg'
import lu4 from '../images/lu4.jpg'

const Science = () => {
    return (
        <div className='science-latest'>
            <div className='science-news'>
                <div className='title-head'>
                    <h1>बिज्ञान/प्रविधि</h1>
                    <button>सबै </button>
                </div>
                <div className='news-content'>
                    <div className='more-news'>
                        <div className="col">
                            <img src={sci1} alt="" />
                            <h2>यी व्यक्ति, जो क्रिप्टोकरेन्सीमा लगानी गरेर अर्बपति बने</h2>
                        </div>
                        <div className="col">
                            <img src={sci2} alt="" />
                            <h2>महिला उद्यमीको क्षमता बढाउन सहकार्य गर्दै एनसेल</h2>
                        </div>
                        <div className="col">
                            <img src={sci3} alt="" />
                            <h2>भायानेटलाई एसियन टेलिकम अवार्ड</h2>
                        </div>
                        <div className="col">
                            <img src={sci4} alt="" />
                            <h2>एक्सका सबै प्रिमियम प्रयोगकर्ताले अब ग्रोक एआई चलाउन पाउने</h2>
                        </div>
                        <div className="col">
                            <img src={sci5} alt="" />
                            <h2>न्युज पोर्टल डिजाइनिङ सम्बन्धी अनलाइन तालिम हुँदै, यसरी हुनुहोस् सहभागी</h2>
                        </div>
                    </div>
                    <div className='banner-news'>
                        <div className="title">
                            <h2>एक्सएज ब्राण्डका नयाँ इयरबड र स्पिकर, लञ्च अफरमा ८८० रुपैयाँमै किन्न सकिने</h2>
                        </div>
                        <div className="feature-img">
                            <img src={sci6} alt="" />
                        </div>
                        <div className="details">
                            <p>कम्पनीका अनुसार इयरबड कन्भीई बड्स १३ (ConvE Buds 13) र ब्लुटुथ स्पिकर कन्भीई मिनी पड सार्वजनिक हुँदैछन् । यी दुवै प्रडक्ट ईकमर्स प्लेटफर्म दराजमार्फ सार्वजनिक हुनेछन् ।...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='latest-news'>
                <div className="title-head">
                    <h1>ताजा अपडेट</h1>
                </div>
                <div className="news-content">
                    <div className="col">
                        <h2>गुगलको नयाँ एआई सर्चले देखाउन थाल्यो मालवेयर र स्क्याम साइट</h2>
                        <img src={lu1} alt="" />
                    </div>
                    <div className="col">
                        <h2>३५ हजार तलब भन्दै फेसबुकमा डेटा इन्ट्री जागिरको प्रचार, बैंकको रकम चोर्ने ह्याकरको दाउ</h2>
                        <img src={lu2} alt="" />
                    </div>
                    <div className="col">
                        <h2>अब अकाउन्ट नबनाएरै च्याटजीपीटी प्रयोग गर्न सकिने</h2>
                        <img src={lu3} alt="" />
                    </div>
                    <div className="col">
                        <h2>नेपालका थप १७ सहरमा विस्तार हुँदै पठाओ, बाइक राइडरको दर्ता सुरु</h2>
                        <img src={lu4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Science