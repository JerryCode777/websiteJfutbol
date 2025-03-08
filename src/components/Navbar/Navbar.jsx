// src\components\Navbar\Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { TfiYoutube } from "react-icons/tfi";

const MenuLinks = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Calculadora",
    link: "/calculadora",
  },
  {
    name: "Artículos",
    link: "/articulos",
  },
  {
    name: "Sobre nosotros",
    link: "/about",
  },
  {
    name: "Contacto",
    link: "/contacto",
  }
];

const Navbar = () => {
  return (
    <div className='py-6 bg-black'> 
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* aqui va el logo */}
          <Link to="/" className='flex items-center gap-4'>
            <GiSoccerBall className='h-12 text-6xl text-white' />
            <div className='flex flex-col text-2xl font-bold text-white leading-5'>
              <span>Jey</span>
              <span className='text-sky-400'>FutbolPe-</span>
            </div>
          </Link>

          {/* aqui van los links */}
          <div className='hidden md:block'>
            <ul className='center'>
              {MenuLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <Link to={link.link} className='navlink'>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <a href="https://www.youtube.com/@JeyFutbolPe" className='flex items-center gap-6'>
              <div className='flex items-center navlink cursor-pointer'>
                YouTube
              <span>
                <TfiYoutube />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar