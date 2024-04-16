import React from 'react'
import '../css/EduTourism.scss'
import edu1 from '../images/edu1.jpg'
import edu2 from '../images/edu2.jpg'
import edu3 from '../images/edu3.jpg'
import edu4 from '../images/edu4.jpg'
import tour1 from '../images/tour1.jpg'
import tour2 from '../images/tour2.jpg'
import tour3 from '../images/tour3.png'
import All from '../reusable/All'

const EduTourism = () => {
    return (
        <div className='edu-tourism'>
            <div className="edu-wrapper">
                <div className="title-head">
                    <h1>शिक्षा</h1>
                    <All />
                </div>
                <div className="contentarea">
                    <div className="col">
                        <img src={edu1} alt="" />
                        <h2>विद्यालयहरूलाई शिक्षामन्त्रीको आग्रह- भनसुनका आधारमा भर्ना गर्ने प्रथा बन्द गर्नुहोस्</h2>
                    </div>
                    <div className="col">
                        <h2>भाषा सिक्ने सबैभन्दा सही उमेर कुन हो र किन ?</h2>
                        <img src={edu2} alt="" />
                    </div>
                    <div className="col">
                        <img src={edu3} alt="" />
                        <h2>खुशी शिक्षकबाट गर्न सकिने आशा</h2>
                    </div>
                    <div className="col">
                        <h2>हामी किन पढ्छौं ?</h2>
                        <img src={edu4} alt="" />
                    </div>
                </div>
            </div>
            <div className="tourism-wrapper">
                <div className="title-head">
                    <h1>पर्यटन</h1>
                    <All />
                </div>
                <div className="contentarea">
                    <div className="f-news">
                        <div className="feature-img">
                            <img src={tour1} alt="" />
                        </div>
                        <div className="details">
                            <h2>विभिन्न हिमाल आरोहणका लागि १ हजार ३२९ ले लिए अनुमति, कुन हिमालमा कति ?</h2>
                            <p>पर्यटन विभागका अनुसार शुक्रबारसम्म स्वदेशी तथा विदेशी गरी १७२ समूहका १ हजार ६९ जना पुरुष र २६० जना महिलाले आरोहण अनुमति लिएका छन् ।...</p>
                        </div>
                    </div>
                    <div className="more-news">
                    <div className="col">
                        <img src={tour2} alt="" />
                        <h2>स्प्रिङ सिजनमा भैरहवा र लुम्बिनी घुम्ने पर्यटक घटे, व्यवसायी निराश</h2>
                    </div>
                    <div className="col">
                        <img src={tour3} alt="" />
                        <h2>काेरला हुँदै मानसराेवर जाने मार्ग खुलाउन पहल</h2>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EduTourism