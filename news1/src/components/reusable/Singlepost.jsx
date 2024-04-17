import React from 'react'
import './Singlepost.scss'
import Author from './Author'
import Timer from './Timer'
import featureimg from './thumb.jpg'

const Singlepost = () => {
    return (
        <div className='singlepost'>
            <div className='post-wrapper'>
                <div className='heading'>
                    <div className="title">
                        <h1>दुई समूहबीचको विवादले विराटनगरको रानी क्षेत्र तनावग्रस्त</h1>
                    </div>
                    <div className="author">
                        <Author />
                        <Timer />
                    </div>
                </div>
                <div>
                    <button>fb</button>
                    <button>tt</button>
                    <button>ig</button>
                    <button>ld</button>
                </div>
                <div className='feature-img'>
                    <img src={featureimg} alt="" />
                </div>
                <div className="text">
                    <p>विराटनगर–१५ स्थित रानी क्षेत्र दुई समूहबीच विवाद भएपछि तनावग्रस्त बनेको छ । एक समूहले निकालेको र्‍यालीलाई अर्को समूहले अवरोधको प्रयास गरेको थियो ।</p>
                    <p>रामनवमीको अवसरमा विश्व हिन्दु परिषद नेपाल युवा विभागले निकालेको र्‍यालीमा सहभागी केही युवा र मुस्लिम समुदायको युवाहरुबीच झडप भएको छ ।</p>
                    <p>दुवै पक्षका  युवाहरुले  एकअर्को बीच  ढुंगामुढासमेत  प्रहार गरेका छन् । स्थिति नियन्त्रणमा लिनका लागि प्रहरीले बल प्रयोग गरेको छ । केही राउण्ड हवाई फायर र केही सेल अश्रुग्यास पनि प्रहार गरेको जिल्ला प्रहरी कार्यालय मोरङले जनाएको छ ।</p>
                    <p>बल प्रयोग गरेपछि दुवै समूह तितरबितर भएको र अहिले अवस्था सामान्य हुँदै गएको प्रहरीले जानकारी दिएको छ ।</p>
                </div>
                <div>
                    <div className="carousel"></div>
                </div>
                <div className="comment"></div>
            </div>
            <div className='Latest'>
                <div className="update"></div>
                <div className="ads"></div>
            </div>
        </div>
    )
}

export default Singlepost