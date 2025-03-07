import React from 'react';
import { GiSoccerBall } from 'react-icons/gi';
import { TfiYoutube } from "react-icons/tfi";

const MenuLinks = [
  {
    name: "Inicio",
    link: "#/",
  },
  {
    name: "Videos",
    link: "#/store",
  },
  {
    name: "Artículos",
    link: "#/toys",
  },
  {
    name: "Sobre nosotros",
    link: "#/about",
  },
  {
    name: "Contacto",
    link: "#/videos",
  }
];

const Navbar = () => {
  return (
    <div className='py-6 bg-black'> 
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* aqui va el logo */}
          <div className='flex items-center gap-4'>
            <GiSoccerBall className='h-12 text-6xl text-white' />
            <div className='flex flex-col text-2xl font-bold text-white leading-5'>
              <span>Jey</span>
              <span className='text-sky-400'>FutbolPe-</span>
            </div>
          </div>

          {/* aqui van los links */}
          <div className='hidden md:block'>
            <ul className='center'>
              {MenuLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <a href={link.link} className='navlink'>
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex items-center gap-6'>
              <div className='flex items-center navlink cursor-pointer'>
                YouTube
              <span>
                <TfiYoutube />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar