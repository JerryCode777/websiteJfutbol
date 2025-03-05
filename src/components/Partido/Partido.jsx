import { useState } from 'react';

const Partido = ({ partido, equipos, onResultChange }) => {
  // Usar null como valor inicial
  const [golesLocal, setGolesLocal] = useState(partido.golesLocal ?? null);
  const [golesVisitante, setGolesVisitante] = useState(partido.golesVisitante ?? null);

  const handleChange = (type, value) => {
    const val = value === '' ? null : parseInt(value, 10);
    
    if (type === 'local') {
      setGolesLocal(val);
      onResultChange(partido.id, val, golesVisitante);
    } else {
      setGolesVisitante(val);
      onResultChange(partido.id, golesLocal, val);
    }
  };

  const equipoLocal = equipos.find((e) => e.id === partido.local);
  const equipoVisitante = equipos.find((e) => e.id === partido.visitante);

  return (
    <div className="flex items-center gap-1 md:gap-3 p-2 md:p-3 bg-gray-800 rounded-lg shadow-xl 
                   transition-all duration-300 hover:bg-gray-700/50 mx-auto w-full">
      <span className="flex-1 text-right font-medium text-gray-300 text-xs md:text-sm truncate pr-1">
        <div className="flex items-center gap-1 justify-end">
          <span>{equipoLocal?.name}</span>
          <img 
            src={new URL(`../../assets/banderas/${equipoLocal?.logo}`, import.meta.url).href}
            alt={equipoLocal?.name}
            className="h-4 w-6 object-contain"
          />
        </div>
      </span>
      
      <div className="flex items-center gap-1 md:gap-2">
        <input
          type="number"
          className="w-10 md:w-14 text-center border border-gray-600 rounded-md py-1 bg-gray-700 
                     text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs md:text-sm"
          value={golesLocal ?? ''}
          onChange={(e) => handleChange('local', e.target.value)}
          min="0"
          placeholder="-"
        />
        <span className="text-sm md:text-base font-bold text-gray-300">:</span>
        <input
          type="number"
          className="w-10 md:w-14 text-center border border-gray-600 rounded-md py-1 bg-gray-700 
                     text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs md:text-sm"
          value={golesVisitante ?? ''}
          onChange={(e) => handleChange('visitante', e.target.value)}
          min="0"
          placeholder="-"
        />
      </div>
      
      <span className="flex-1 text-left font-medium text-gray-300 text-xs md:text-sm truncate pl-1">
        <div className="flex items-center gap-1">
          <img 
            src={new URL(`../../assets/banderas/${equipoVisitante?.logo}`, import.meta.url).href}
            alt={equipoVisitante?.name}
            className="h-4 w-6 object-contain"
          />
          <span>{equipoVisitante?.name}</span>
        </div>
      </span>
    </div>
  );
};

export default Partido;