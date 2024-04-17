import React from 'react'
import './Home.scss'
import BannerNews from '../home-parts/BannerNews'
import News from '../home-parts/News'
import Trending from '../home-parts/Trending'
import Economy from '../home-parts/Economy'
import Science from '../home-parts/Science'
import Blog from '../home-parts/Blog'
import Politics from '../home-parts/PoliticsSports'
import Feature from '../home-parts/Feature'
import EntertainRochak from '../home-parts/EntertainRochak'
import EduTourism from '../home-parts/EduTourism'
import Events from '../home-parts/Events'
import Health from '../home-parts/Health'
import Video from '../home-parts/Video'

const Home = () => {
  return (
    <div className='home'>
        <BannerNews />
        <News/>
        <Trending />
        <Economy />
        <Science />
        <Blog />
        <Politics />
        <Feature />
        <EntertainRochak />
        <EduTourism />
        <Events />
        <Health />
        <Video />
    </div>
  )
}

export default Home