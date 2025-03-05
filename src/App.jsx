import React from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Simulador from './components/Simulador/Simulador';

const App = () => {
  React.useEffect(() => {
    AOS.init(
      {
        duration: 600,
        easing: "ease-in-sine",
        offset: 100,
    });
  },[]);
  return <div
  className="bg-gray-300 overflow-hidden">
    <Navbar />
    <Hero />
    <Simulador />
  </div> 

};

export default App