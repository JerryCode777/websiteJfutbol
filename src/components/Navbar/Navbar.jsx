import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { GiSoccerBall } from 'react-icons/gi'

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
    name: "Artículo",
    link: "#/toys",
  },
  {
    name: "Contacto",
    link: "#/videos",
  },
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
          {/* aqui va la busqueda */}
          <div className='flex items-center gap-6'>
            <input 
              type="text"
              placeholder='Search'
              className='hidden sm:block py-2 px-3 rounded-full bg-slate-200'
            />
            <div className='bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer'>
              <FaSearch className='text-white text-sm' />
            </div>
            <div className='flex items-center navlink cursor-pointer'>
              Eng
              <span>
                <MdArrowDropDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar