import { Link } from 'react-router-dom';
import imagenIbanez from '../assets/ibanez.png'; // Asegúrate de tener esta ruta correcta
import imagenPartidos from '../assets/mundial.jpg'; // Agrega esta imagen en tu assets

const Articulos = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-sky-400">Artículos Destacados</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Artículo 1 - Oscar Ibáñez */}
          <Link to="/articulos/oscar-ibanez" className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors group">
            <div className="h-48 overflow-hidden">
              <img 
                src={imagenIbanez}
                alt="Oscar Ibáñez en conferencia de prensa"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Oscar Ibáñez: El nuevo DT</h3>
              <p className="text-sm text-gray-400">Conoce al nuevo estratega de la selección</p>
            </div>
          </Link>
          
          {/* Artículo 2 - Próximos Partidos */}
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors group">
            <div className="h-48 overflow-hidden">
              <img 
                src={imagenPartidos}
                alt="Estadio de fútbol lleno de hinchas"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Próximos Partidos</h3>
              <p className="text-sm text-gray-400">Análisis de la fecha 13</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulos;