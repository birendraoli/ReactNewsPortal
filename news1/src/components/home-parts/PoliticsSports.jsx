import React from 'react'
import '../css/PoliticsSports.scss'
import rn1 from '../images/rn1.jpg'
import rn2 from '../images/rn2.jpg'
import rn3 from '../images/rn3.jpg'
import rn4 from '../images/rn4.jpg'
import rn5 from '../images/rn5.jpeg'
import sport1 from '../images/sport1.jpg'
import sport2 from '../images/sport2.jpg'
import sport3 from '../images/sport3.jpg'
import sport4 from '../images/sport4.jpg'
import sport5 from '../images/sport5.jpg'

const Politics = () => {
    return (
        <div className='politics-sports'>
            <div className="politics">
                <div className="title-head">
                    <h1>Politics</h1>
                    <button>All</button>
                </div>
                <div className="news-content">
                    <div className='banner-news'>
                        <div className="col">
                            <img src={rn1} alt="" />
                            <h2>श्रीमान्–श्रीमतीको झगडाले विभाजनको संघारमा नागरिक उन्मुक्ति</h2>
                        </div>
                        <div className="col">
                            <img src={rn2} alt="" />
                            <h2>स्वर्णिम वाग्लेले सहकारी समस्या समाधानको सुत्र दिएको कि 'कांग्रेसलाई पढाएको' ?</h2>
                        </div>
                    </div>
                    <div className='more-news'>
                        <div className="col">
                            <img src={rn3} alt="" />
                            <h2>कर्णालीमा चैत २७ गतेभित्र नयाँ सरकार गठन गर्न आह्वान</h2>
                        </div>
                        <div className="col">
                            <img src={rn4} alt="" />
                            <h2>गृहमन्त्रीलाई बोल्न नदिएर कांग्रेसले संसदीय अराजकता मच्चायो : एमाले</h2>
                        </div>
                        <div className="col">
                            <img src={rn5} alt="" />
                            <h2>गण्डकीमा राप्रपा नभइ विश्वासको मत लिन सकिँदैन : पाण्डे</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sports">
                <div className="title-head">
                    <h1>Sports</h1>
                    <button>All</button>
                </div>
                <div className="news-content">
                    <div className='banner-news'>
                        <div className="col">
                            <img src={sport1} alt="" />
                            <h2>नेपालविरुद्ध आयरल्यान्ड ‘ए’ पहिले ब्याटिङ गर्दै</h2>
                        </div>
                        <div className="col">
                            <img src={sport2} alt="" />
                            <h2>गुजरातमा नेपालको लगातार दोस्रो जित, बरोडा २७ रनले पराजित</h2>
                        </div>
                    </div>
                    <div className='more-news'>
                        <div className="col">
                            <img src={sport3} alt="" />
                            <h2>लिभरकुसेन जर्मन कपको फाइनलमा</h2>
                        </div>
                        <div className="col">
                            <img src={sport4} alt="" />
                            <h2>लुटनलाई हराउँदै आर्सनल शीर्ष स्थानमा, सिटीको जितमा फोडेनको ह्याट्रिक</h2>
                        </div>
                        <div className="col">
                            <img src={sport5} alt="" />
                            <h2>आयरल्यान्ड विरुद्ध कमजोर लक्ष्य पछ्याएको नेपाल २१ रनले पराजित</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Politics