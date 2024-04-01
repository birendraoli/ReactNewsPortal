import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {  BrowserRouter as Brou, Routes, Route } from  'react-router-dom';
import BannerNews from './components/home/BannerNews';
import News from './components/home-parts/News';

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
        <Footer />
      </Brou>
    </>
  );
}

export default App;
