import React from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

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
  className="overflow-hidden">
    <Navbar />
    <Hero />
    <Hero />
    <Hero />
    <Hero />
    <Hero />
  </div> 

};

export default App