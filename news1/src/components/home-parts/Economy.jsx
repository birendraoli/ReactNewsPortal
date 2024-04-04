import React from 'react'
import '../css/Economy.scss'
import artha1 from '../images/artha1.jpg'
import artha2 from '../images/artha2.jpeg'
import artha3 from '../images/artha3.jpg'
import artha4 from '../images/artha4.jpg'
import artha5 from '../images/artha5.jpg'

const Economy = () => {
    return (
        <div className='economy-wrapper'>
            <div className="title-head">
                <h1>अर्थ/वाणिज्य</h1>
                <button>सबै </button>
            </div>
            <div className="news-content">
                <div className="f-news">
                    <div className="feature-img">
                        <img src={artha1} alt="" />
                    </div>
                    <div className="title">
                        <h2>११ परियोजनामा भित्रियो एक खर्ब ३७ अर्ब, दुई लगानी सम्मेलनमा प्रतिबद्धता मात्रै</h2>
                    </div>
                    <div className="details">
                        <p>सरकार अहिले तेस्रो लगानी सम्मेलनको तयारीमा जुटेको छ । आगामी वैशाख १६ र १७ गते काठमाडौंमा हुने लगानी सम्मेनलमा सरकारले १३० भन्दा बढी परियोजनाहरू प्रस्तुत गर्ने तयारी गरेको छ ।

लगानी सम्मेलनका लागि सरकारले विभिन्न देशका उद्यमी एवं लगानीकर्ताहरूलाई निमन्त्रणा पठाइसकेको छ ।...</p>
                    </div>
                </div>
                <div className="more-news">
                    <div className="col">
                        <img src={artha2} alt="" />
                        <h2>ग्लोबल आइएमई बैंक र जीआईजेडबीच सम्झौता</h2>
                    </div>
                    <div className="col">
                        <img src={artha3} alt="" />
                        <h2>उत्पादकत्व बढाउन अनुदानमा ‘स्यालो ट्युबवेल’</h2>
                    </div>
                    <div className="col">
                        <img src={artha4} alt="" />
                        <h2>तीनवटै अन्तर्राष्ट्रिय विमानस्थलका प्रमुख फेरिए</h2>
                    </div>
                    <div className="col">
                        <img src={artha5} alt="" />
                        <h2>मार्कीचोक–भरतपुर २२० केभी प्रसारण लाइन निर्माण सक्न ताकेता</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Economy