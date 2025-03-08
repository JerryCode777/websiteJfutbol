import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import Navbar from './components/Navbar/Navbar';
import Inicio from './pages/Inicio';
import Articulos from './pages/Articulos';
import About from './pages/About';
import Contacto from './pages/Contacto';
import Calculadora from './pages/Calculadora';
import Footer from './components/Footer/Footer';
import Terminos from './pages/Terminos';
import Politica from './pages/Politica';
import ArticuloIbanez from './components/Articulos/ArticuloIbanez';

const App = () => {
  React.useEffect(() => {
    AOS.init(
      {
        duration: 600,
        easing: "ease-in-sine",
        offset: 100,
    });
  },[]);
  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/calculadora' element={<Calculadora />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/terminos' element={<Terminos />} />
        <Route path='/politica' element={<Politica />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/articulos/oscar-ibanez" element={<ArticuloIbanez />} />
      </Routes>
      <Footer />
    </div>
  ) 

};

export default App