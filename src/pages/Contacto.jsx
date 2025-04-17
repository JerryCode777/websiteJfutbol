
import { TfiYoutube } from "react-icons/tfi";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-sky-400 mb-8">Contáctanos</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nombre</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                        focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                        focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea 
              rows="4"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg
                        focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-lg
                      transition-colors duration-300"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">Otras vías de contacto</h2>
          <ul className="space-y-2">
            <li>📧 jerry.07.dot@gmail.com</li>
            <li>📞 +51 987 654 321</li>
            <li>
              <a 
                href="https://www.youtube.com/@jaka.Sports" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 flex items-center gap-2"
              >
                <TfiYoutube /> YouTube Oficial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacto;