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

  const getHeadToHeadStats = (aId, bId) => {
    let aPoints = 0, aGF = 0, aGC = 0, aAwayGoals = 0;
    let bPoints = 0, bGF = 0, bGC = 0, bAwayGoals = 0;

    partidos.forEach(partido => {
      if ((partido.local === aId && partido.visitante === bId) || 
          (partido.local === bId && partido.visitante === aId)) {
        if (partido.golesLocal === null || partido.golesVisitante === null) return;

        const isALocal = partido.local === aId;
        const aGoles = isALocal ? partido.golesLocal : partido.golesVisitante;
        const bGoles = isALocal ? partido.golesVisitante : partido.golesLocal;

        // Puntos
        if (aGoles > bGoles) aPoints += 3;
        else if (aGoles === bGoles) { aPoints += 1; bPoints += 1; }
        else bPoints += 3;

        // Goles y diferencia
        aGF += aGoles;
        aGC += bGoles;
        bGF += bGoles;
        bGC += aGoles;

        // Goles de visitante
        if (isALocal) bAwayGoals += bGoles;
        else aAwayGoals += aGoles;
      }
    });

    return {
      a: { puntos: aPoints, GF: aGF, GC: aGC, awayGoals: aAwayGoals },
      b: { puntos: bPoints, GF: bGF, GC: bGC, awayGoals: bAwayGoals }
    };
  };

  const equiposConEstadisticas = equipos.map(equipo => {
    const stats = calcularEstadisticas(equipo.id);
    return {
      ...equipo,
      ...stats,
      puntos: (equipo.puntosIniciales || 0) + stats.puntos
    };
  }).sort((a, b) => {
    // Criterio 1: Puntos
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;

    // Criterio 2: Diferencia de goles
    const aDG = a.golesFavor - a.golesContra;
    const bDG = b.golesFavor - b.golesContra;
    if (aDG !== bDG) return bDG - aDG;

    // Criterio 3: Goles a favor
    if (a.golesFavor !== b.golesFavor) return b.golesFavor - a.golesFavor;

    // Criterio 4: Enfrentamientos directos
    const h2h = getHeadToHeadStats(a.id, b.id);
    
    // Subcriterio 1: Puntos en enfrentamientos
    if (h2h.a.puntos !== h2h.b.puntos) return h2h.b.puntos - h2h.a.puntos;

    // Subcriterio 2: Diferencia de goles en enfrentamientos
    const aH2hDG = h2h.a.GF - h2h.a.GC;
    const bH2hDG = h2h.b.GF - h2h.b.GC;
    if (aH2hDG !== bH2hDG) return bH2hDG - aH2hDG;

    // Subcriterio 3: Goles a favor en enfrentamientos
    if (h2h.a.GF !== h2h.b.GF) return h2h.b.GF - h2h.a.GF;

    // Subcriterio 4: Goles de visitante en enfrentamientos
    return h2h.b.awayGoals - h2h.a.awayGoals;
  });

  return (
    <div className="mx-auto mb-8 px-4 max-w-2xl fade-in">
      <div className="overflow-x-auto pb-2">
        <table className="min-w-[600px] table-auto border-collapse w-full">
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
            {equiposConEstadisticas.map((equipo, index) => {
              const position = index + 1;
              let rowClass = '';
              let borderClass = '';
              
              if (position <= 6) {
                rowClass = 'bg-blue-700/20';
                borderClass = 'border-l-4 border-green-500';
              } else if (position === 7) {
                rowClass = 'bg-blue-800/20';
                borderClass = 'border-l-4 border-yellow-500';
              }

              return (
                <tr 
                  key={equipo.id} 
                  className={`group ${rowClass} hover:!bg-gray-800/50 transition-colors duration-200`}
                >
                  <td className={`px-2 py-1.5 border-b border-gray-700 text-gray-300 font-bold text-center text-sm ${borderClass}`}>
                    {position}
                    {position <= 6 && <span className="ml-1 text-green-400 font-bold">✓</span>}
                    {position === 7 && <span className="ml-1 text-yellow-400 font-bold">↗</span>}
                  </td>
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
                      {equipo.puntosIniciales < 0 && <span className="ml-1 text-red-400 text-xs">*</span>}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Leyenda de clasificación */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400 px-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-900/20 border-l-4 border-green-500"></div>
            <span>Clasificación directa al Mundial (Posiciones 1-6)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-900/20 border-l-4 border-yellow-500"></div>
            <span>Clasifica al repechaje (7ma posición)</span>
          </div>
        </div>

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