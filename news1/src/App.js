import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {  BrowserRouter as Brou, Routes, Route } from  'react-router-dom';
import BannerNews from './components/home/BannerNews';
import News from './components/home-parts/News';
import Trending from './components/home-parts/Trending';
import Economy from './components/home-parts/Economy';
import Science from './components/home-parts/Science';
import Blog from './components/home-parts/Blog';
import Politics from './components/home-parts/PoliticsSports';
import Feature from './components/home-parts/Feature';
import EntertainRochak from './components/home-parts/EntertainRochak';

function App() {
  return (
    <>
      <Brou>
        <Header />
        <Navbar />
        <Routes>
          <Route />
        </Routes>
        <BannerNews />
        <News />
        <Trending />
        <Economy />
        <Science />
        <Blog />
        <Politics />
        <Feature />
        <EntertainRochak />
        <Footer />
      </Brou>
    </>
  );
}

export default App;
