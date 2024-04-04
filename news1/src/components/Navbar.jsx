import React from 'react'
import './Navbar.scss'
import { FaHome, FaSearch } from "react-icons/fa";

const Navbar = () => {
    const navitems = [
        {
            name: 'होम',
            link: 'home'
        },
        {
            name: 'समाचार',
            link: 'news'
        },
        {
            name: 'अर्थ/वाणिज्य',
            link: 'economics'
        },
        {
            name: 'बिज्ञान/प्रविधि',
            link: 'science'
        },
        {
            name: 'विचार/ब्लग',
            link: 'blogs'
        },
        {
            name: 'अन्य',
            link: 'other',
            drop: [
                {
                    name: 'राजनीतिक',
                    link: 'politics'
                },
                {
                    name: 'खेलकुद ',
                    link: 'sports'
                },
                {
                    name: 'फिचर ',
                    link: 'feature'
                },
                {
                    name: 'मनोरंजन ',
                    link: 'entertainment'
                },
                {
                    name: 'रोचक ',
                    link: 'interesting'
                },
                {
                    name: 'शिक्षा ',
                    link: 'education'
                },
                {
                    name: 'पर्यटन ',
                    link: 'tourism'
                },
                {
                    name: 'घटना ',
                    link: 'events'
                },
                {
                    name: 'स्व्यास्थ्य/जीवनशैली ',
                    link: 'health'
                },
                {
                    name: 'भिडियो ',
                    link: 'video'
                }
            ]
        }
    ];
  return (
    <div className='Navbar'>
        <div className='nav-wrapper'>
            <div className='nav-items'>
            {/* <a href=""><FaHome className='home-icon'/></a> */}
            {navitems.map(({name, link, drop}, index) => (
            <a className='nav-link' href={link}>{name}</a>
        ))}
            </div>
            <div className='nav-right'>
            {/* <FaSearch className='nav-search'/> */}
                <button>English</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar