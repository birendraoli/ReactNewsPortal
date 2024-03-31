import React from 'react'
import './Navbar.scss'
import { FaHome, FaSearch } from "react-icons/fa";

const Navbar = () => {
    const navitems = [
        {
            name: 'Home',
            link: 'home'
        },
        {
            name: 'News',
            link: 'news'
        },
        {
            name: 'Science',
            link: 'science'
        },
        {
            name: 'Health',
            link: 'health'
        },
        {
            name: 'Sports',
            link: 'sports'
        },
        {
            name: 'Other',
            link: 'other',
            drop: [
                {
                    name: 'Politics',
                    link: 'politics'
                },
                {
                    name: 'Arts',
                    link: 'arts'
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