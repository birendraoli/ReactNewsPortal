import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {  BrowserRouter as Brou, Routes, Route } from  'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Brou>
        <Header />
        <Navbar />
        <Routes>
          <Route />
        </Routes>
        <Home />
        <Footer />
      </Brou>
    </>
  );
}

export default App;
