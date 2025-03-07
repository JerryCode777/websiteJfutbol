// src/components/Tabla/Tabla.jsx
const Tabla = ({ equipos, partidos, onTeamClick }) => {
  const calcularEstadisticas = (equipoId) => {
    return partidos.reduce((acc, partido) => {
      if (partido.golesLocal === null || partido.golesVisitante === null) return acc;

      if (partido.local === equipoId || partido.visitante === equipoId) {
        const esLocal = partido.local === equipoId;
        const golesFavor = esLocal ? partido.golesLocal : partido.golesVisitante;
        const golesContra = esLocal ? partido.golesVisitante : partido.golesLocal;
        
        acc.golesFavor += golesFavor;
        acc.golesContra += golesContra;
        
        if (golesFavor > golesContra) {
          acc.puntos += 3;
          acc.wins += 1;
        } else if (golesFavor === golesContra) {
          acc.puntos += 1;
          acc.draws += 1;
        } else {
          acc.losses += 1;
        }
        acc.played += 1;
      }
      return acc;
    }, { 
      puntos: 0, 
      played: 0, 
      wins: 0, 
      draws: 0, 
      losses: 0, 
      golesFavor: 0, 
      golesContra: 0 
    });
  };

  const equiposConEstadisticas = equipos.map(equipo => ({
    ...equipo,
    ...calcularEstadisticas(equipo.id),
    puntos: (equipo.puntosIniciales || 0) + calcularEstadisticas(equipo.id).puntos
  })).sort((a, b) => b.puntos - a.puntos);

  return (
    <div className="mx-auto mb-8 px-4 max-w-2xl fade-in"> {/* Added px-4 para spacing en mobile */}
      <div className="overflow-x-auto pb-2"> {/* Padding para el scrollbar */}
        <table className="min-w-[600px] table-auto border-collapse w-full"> {/* Ancho mínimo para mobile */}
          <thead className="bg-gray-800">
            <tr>
              {['Pos', 'Equipo', 'PJ', 'G', 'E', 'P', 'GF', 'GC', 'DG', 'Pts'].map((header) => (
                <th 
                  key={header} 
                  className={`
                    px-2 py-3 
                    ${header === 'Equipo' ? 'text-left w-[200px]' : 'text-center'}
                    border-b border-gray-700 text-gray-300 font-semibold text-sm
                  `}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {equiposConEstadisticas.map((equipo, index) => (
              <tr 
                key={equipo.id} 
                className="hover:bg-gray-800/50 transition-colors duration-200"
              >
                <td className="px-2 py-1.5 border-b border-gray-700 text-gray-300 text-center text-sm">{index + 1}</td>
                <td className="px-2 py-1.5 border-b border-gray-700 font-bold text-gray-100 text-sm text-left truncate cursor-pointer hover:text-blue-400 transition-colors" 
                onClick={() => onTeamClick(equipo)}
                >
                  <div className="flex items-center gap-2">
                    <img 
                      src={new URL(`../../assets/banderas/${equipo.logo}`, import.meta.url).href}
                      alt={equipo.name}
                      className="h-5 w-8 object-contain"
                    />
                    <span>{equipo.name}</span>
                  </div>
                </td>
                <td className="px-2 py-1.5 border-b border-gray-700 text-gray-300 text-center text-sm">{equipo.played}</td>
                <td className="px-2 py-1.5 border-b border-gray-700 text-center text-green-400 text-sm">{equipo.wins}</td>
                <td className="px-2 py-1.5 border-b border-gray-700 text-center text-gray-300 text-sm">{equipo.draws}</td>
                <td className="px-2 py-1.5 border-b border-gray-700 text-center text-red-400 text-sm">{equipo.losses}</td>
                <td className="px-2 py-1.5 border-b border-gray-700 text-center text-gray-300 text-sm">{equipo.golesFavor}</td>
                <td className="px-2 py-1.5 border-b border-gray-700 text-center text-gray-300 text-sm">{equipo.golesContra}</td>
                <td className="px-2 py-1.5 border-b border-gray-700 text-center text-gray-300 text-sm">{equipo.golesFavor - equipo.golesContra}</td>
                <td className="px-2 py-1.5 border-b border-gray-700 font-bold text-gray-100 text-center text-sm">
                  <div className="flex items-center justify-center">
                    <span>{equipo.puntos}</span>
                    {equipo.puntosIniciales < 0 && (
                      <span className="ml-1 text-red-400 text-xs">*</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {equiposConEstadisticas.some(e => e.puntosIniciales < 0) && (
        <div className="mt-3 text-sm text-gray-400 fade-in px-2 text-center md:text-left">
          * -3 puntos debido a una sanción impuesta por el Tribunal de Arbitraje Deportivo (TAS).
        </div>
        )}
      </div>
    </div>
  ); 
};

export default Tabla;