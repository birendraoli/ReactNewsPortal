import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {  BrowserRouter as Brou, Routes, Route } from  'react-router-dom';
import Home from './components/home/Home';
import Singlepage from './components/reusable/Singlepage';
import Notfound from './components/reusable/Notfound';

function App() {
  return (
    <>
      <Brou>
        <Header />
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='home' element={<Home />}/>
          <Route path='news' element={<Singlepage />} />
          <Route path='economics' element={<Singlepage />} />
          <Route path='science' element={<Singlepage />} />
          <Route path='blogs' element={<Singlepage />} />
          <Route path='politics' element={<Singlepage />} />
          <Route path='sports' element={<Singlepage />} />
          <Route path='feature' element={<Singlepage />} />
          <Route path='entertainment' element={<Singlepage />} />
          <Route path='interesting' element={<Singlepage />} />
          <Route path='education' element={<Singlepage />} />
          <Route path='tourism' element={<Singlepage />} />
          <Route path='events' element={<Singlepage />} />
          <Route path='health' element={<Singlepage />} />
          <Route path='video' element={<Singlepage />} />
          <Route path='*' element={<Notfound />}/>
        </Routes>
        <Footer />
      </Brou>
    </>
  );
}

export default App;
