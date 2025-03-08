// src/components/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { TfiYoutube } from 'react-icons/tfi';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Sección Logo */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <GiSoccerBall className="text-4xl text-sky-400" />
              <span className="text-xl font-bold text-slate-400">JeyFutbolPe-</span>
            </Link>
            <p className="text-sm">Tu simulador líder de fútbol peruano</p>
          </div>

          {/* Sección Legal */}
          <div>
            <h4 className="text-slate-400 text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terminos" className="hover:text-sky-400 transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/politica" className="hover:text-sky-400 transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Sección Contacto */}
          <div>
            <h4 className="text-slate-400 text-lg font-semibold mb-4">Contacto Programador</h4>
            <ul className="space-y-2">
              <li>jerry.07.dot@gmail.com</li>
              <li>+51 959 13 41 55</li>
            </ul>
          </div>

          {/* Sección Redes */}
          <div>
            <h4 className="text-slate-400 text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@JeyFutbolPe" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors">
                <TfiYoutube className="text-2xl" />
              </a>
              {/* Añadir más iconos de redes sociales si necesitas */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} JeyFutbolPe-. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;