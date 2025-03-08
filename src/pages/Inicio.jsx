import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { TfiYoutube } from "react-icons/tfi";
import diaz from '../assets/diaz.png'; // Agrega esta imagen en tu assets
import quispe from '../assets/quispe.png'; // Agrega esta imagen en tu assets

const Inicio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Sección Hero */}
        <div className="text-center mb-12">
          <GiSoccerBall className="text-8xl text-sky-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Bienvenido a JeyFutbolPe-
          </h1>
          <p className="text-xl mb-8">Usa la calculadora para determinar si tu país puede clasificar al Mundial</p>
          
          <Link 
            to="/calculadora" 
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg 
                      transition-all duration-300 transform hover:scale-105"
          >
            Comenzar Simulación
          </Link>
        </div>

        {/* Sección de Videos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-sky-400 text-center">
            Últimos Videos <TfiYoutube className="inline-block text-red-600" />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Video 1 */}
            <div className="relative group">
              <a 
                href="https://youtu.be/KOwAyD-yux8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl"
              >
                <img 
                  src= {diaz}
                  alt="Miniatura video 1" 
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <TfiYoutube className="text-6xl text-red-600" />
                </div>
              </a>
              <h3 className="mt-4 text-lg font-semibold">LA CALCULADORA - ¿ QUÉ EQUIPOS CLASIFICARÁN AL MUNDIAL del 2026 ? LAS CHANCES DE CADA SELECCIÓN</h3>
            </div>

            {/* Video 2 */}
            <div className="relative group">
              <a 
                href="https://youtu.be/3z7p-18Hum4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl"
              >
                <img 
                  src= {quispe}
                  alt="Miniatura video 2" 
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <TfiYoutube className="text-6xl text-red-600" />
                </div>
              </a>
              <h3 className="mt-4 text-lg font-semibold">ELIMINATORIAS CONMEBOL FECHAS 1 Y 2 - PREDICCIÓN SEPTIEMBRE 2023 - ¿Perú le gana a Brasil?</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Inicio;