import React from 'react';
import { FaYoutube, FaStar } from 'react-icons/fa';
import HeroImg from '../../assets/neymar.svg';
import Reactim from '../../assets/react.svg';

const Hero = () => {
  return (
    <div className='min-h-[700px] flex flex-col items-center justify-center relative'>
      <div className='container mt-12 sm:mt-0 pb-20 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0'>
          {/* Contenido */}
          <div className='space-y-3 md:space-y-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0'>
            <div data-aos='fade-up'>
              <h1 className='text-4xl md:text-6xl font-bold'>Visitanos en </h1>
              <h1 className='text-6xl font-bold text-primary'>YouTube</h1>
            </div>
            <p className='text-gray-500 text-sm font-semibold'>
              No solo lo leas, vívelo con nosotros. Mira nuestros videos y únete a la comunidad.
            </p>
            <div className='mx-auto sm:mx-0'>
              <button className='primary-btn flex justify-center items-center gap-3'>
                Play on
                <span>
                  <FaYoutube className='text-2xl' />
                </span>
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div>
            <img
              src={HeroImg}
              alt="Neymar Illustration"
              className="h-140 w-[180px] sm:w-[240px] lg:w-[340px] mx-auto relative z-30"
            />
          </div>

          {/* Review */}
          <div className='sm:px-16 md:px-24 flex justify-center'>
            <div className='flex items-center'>
              <div className='space-y-4 text-center'>
                <img
                  src={Reactim}
                  alt="React Logo"
                  className='w-full h-[100px] object-cover rounded-xl shadow-md hover:scale-110 duration-200 cursor-pointer'
                />
                <p className='text-sm flex items-center justify-center gap-4'>
                  4.7{" "}
                  <span>
                    <FaStar className='text-primary' />
                  </span>
                </p>
                <p className='text-sm text-gray-400'>
                  Eliminatorias Mexico-EEUU-Canada 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;