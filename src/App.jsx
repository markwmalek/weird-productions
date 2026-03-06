import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Artists from './pages/Artists';
import WorkWithWeird from './pages/WorkWithWeird';
import Contact from './pages/Contact';
import Subscribe from './pages/Subscribe';
import AmericanUnderground from './pages/AmericanUnderground';
import DollyWeird from './pages/DollyWeird';
import Smash from './pages/Smash';
import Raleigh from './pages/Raleigh';
import SpeedHouse from './pages/SpeedHouse';
import './App.css';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/work-with-weird" element={<WorkWithWeird />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/american-underground" element={<AmericanUnderground />} />
        <Route path="/dollyweird" element={<DollyWeird />} />
        <Route path="/smash" element={<Smash />} />
        <Route path="/raleigh" element={<Raleigh />} />
        <Route path="/speedhouse" element={<SpeedHouse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
