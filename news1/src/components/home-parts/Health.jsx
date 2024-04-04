import React from 'react'
import '../css/Health.scss'
import hl1 from '../images/hl1.png'
import hl2 from '../images/hl2.jpg'
import hl3 from '../images/hl3.jpg'
import hl4 from '../images/hl4.jpg'
import hl5 from '../images/hl5.jpg'

const Health = () => {
    return (
        <div className='health-wrapper'>
            <div className="title-head">
                <h1>Health/Lifestyle</h1>
                <button>All</button>
            </div>
            <div className="contentarea">
                <div className="f-news">
                    <div className="feature-img">
                        <img src={hl1} alt="" />
                    </div>
                    <div className="details">
                        <h2>रजोनिवृत्तिपछि यौनरुचि घट्छ ? यस्ता छन् ५ भ्रम</h2>
                        <p>जब महिलामा नियमित हुने महिनावारी एउटा उमेरमा पुगेपछि रोकिन्छ, त्यसलाई रजोनिवृत्ति अर्थात् ‘मेनोपज’ भनिन्छ । खासगरी महिलाको उमेर ४५ वा ५० वर्ष पार गरेपछि उनीहरुको महिनावारी सुक्छ ।...</p>
                    </div>
                </div>
                <div className="more-news">
                    <div className="col">
                        <img src={hl2} alt="" />
                        <h2>५ उपाय, जसले बाँझोपनको समस्या समाधानमा मद्दत गर्छ</h2>
                    </div>
                    <div className="col">
                        <img src={hl3} alt="" />
                        <h2>गर्भावस्थामा गरिने फिटल इकोकार्डियोग्राफी के हो ?</h2>
                    </div>
                    <div className="col">
                        <img src={hl4} alt="" />
                        <h2>चाहिनेभन्दा बढी सोच्नुहुन्छ ? यस्ता स्वास्थ्य समस्या निम्तिन सक्छन्</h2>
                    </div>
                    <div className="col">
                        <img src={hl5} alt="" />
                        <h2>१२ टिप्स, जसले निद्रालाई सहज पार्छ</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Health