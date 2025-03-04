const Tabla = ({ equipos, partidos }) => {
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
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-50">
          <tr>
            {['Pos', 'Equipo', 'PJ', 'G', 'E', 'P', 'GF', 'GC', 'DG', 'Pts'].map((header) => (
              <th key={header} className="px-4 py-2 text-left border-b-2 border-gray-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {equiposConEstadisticas.map((equipo, index) => (
            <tr key={equipo.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">{index + 1}</td>
              <td className="px-4 py-2 border-b border-gray-200 font-medium">{equipo.name}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-center">{equipo.played}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-center text-green-600">{equipo.wins}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-center">{equipo.draws}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-center text-red-600">{equipo.losses}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-center">{equipo.golesFavor}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-center">{equipo.golesContra}</td>
              <td className="px-4 py-2 border-b border-gray-200 text-center">{equipo.golesFavor - equipo.golesContra}</td>

              <td className="px-4 py-2 border-b border-gray-200 font-bold">
                <div className="flex items-center justify-center">
                    <span>{equipo.puntos}</span>
                    {equipo.puntosIniciales < 0 && (
                    <span className="ml-1 text-red-500 text-sm">*</span>
                    )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {equiposConEstadisticas.some(e => e.puntosIniciales < 0) && (
        <div className="mt-2 text-sm text-gray-500">
            *  -3 puntos debido a una sanción impuesta por el Tribunal de Arbitraje Deportivo (TAS). 
        </div>
      )}
    </div>
  );
};

export default Tabla;