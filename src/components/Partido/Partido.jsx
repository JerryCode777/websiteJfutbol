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
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-2">
      <span className="flex-1 text-right font-medium">{equipoLocal?.name}</span>
      <input
        type="number"
        className="w-16 text-center border rounded py-1 px-2"
        value={golesLocal ?? ''}
        onChange={(e) => handleChange('local', e.target.value)}
        min="0"
        placeholder="-"
      />
      <span className="text-xl font-bold">:</span>
      <input
        type="number"
        className="w-16 text-center border rounded py-1 px-2"
        value={golesVisitante ?? ''}
        onChange={(e) => handleChange('visitante', e.target.value)}
        min="0"
        placeholder="-"
      />
      <span className="flex-1 text-left font-medium">{equipoVisitante?.name}</span>
    </div>
  );
};

export default Partido;