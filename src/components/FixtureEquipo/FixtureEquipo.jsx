//  src/components/FixtureEquipo/FixtureEquipo.jsx
import React from 'react';
import { MdClose, MdHome, MdFlight } from 'react-icons/md';

const FixtureEquipo = ({ equipo, equipos, todosLosPartidos, fechaActual, onClose }) => {
  const fixtureCompleto = todosLosPartidos.filter(p => p.local === equipo.id || p.visitante === equipo.id);

  const getNombreEquipo = (id) => {
    return equipos.find(e => e.id === id)?.name || 'Desconocido';
  };

  const getResultadoEstilo = (resultado) => {
    switch(resultado) {
      case 'Victoria': return 'bg-green-600/90 text-white shadow-green-glow';
      case 'Derrota': return 'bg-red-600/90 text-white shadow-red-glow';
      case 'Empate': return 'bg-yellow-600/90 text-white shadow-yellow-glow';
      default: return '';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800/95 rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col relative border border-gray-700 shadow-2xl">
        {/* Encabezado fijo */}
        <div className="sticky top-0 bg-gray-800/95 z-10 p-6 pb-4 border-b border-gray-700">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors hover:bg-gray-700 p-1 rounded-full"
          >
            <MdClose size={26} />
          </button>
          
          <div className="flex items-center justify-center gap-3">
            <img 
              src={new URL(`../../assets/banderas/${equipo.logo}`, import.meta.url).href}
              alt={equipo.name}
              className="h-12 w-16 object-contain"
            />
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Fixture de {equipo.name}
            </h3>
          </div>
        </div>

        {/* Lista de partidos con scroll */}
        <div className="overflow-y-auto flex-1 p-6 pt-4">
          <div className="space-y-3">
            {fixtureCompleto.map((partido) => {
              const esLocal = partido.local === equipo.id;
              const rivalId = esLocal ? partido.visitante : partido.local;
              const rival = equipos.find(e => e.id === rivalId);
              const resultado = todosLosPartidos.find(p => p.id === partido.id);
              const jugado = partido.fecha <= fechaActual;

              let resultadoEstado = '';
              let esVictoria = false;
              let esEmpate = false;
              
              if (jugado && resultado?.golesLocal !== null && resultado?.golesVisitante !== null) {
                const golesEquipo = esLocal ? resultado.golesLocal : resultado.golesVisitante;
                const golesRival = esLocal ? resultado.golesVisitante : resultado.golesLocal;
                
                esVictoria = golesEquipo > golesRival;
                esEmpate = golesEquipo === golesRival;
                
                resultadoEstado = esVictoria ? 'Victoria' : 
                                esEmpate ? 'Empate' : 'Derrota';
              }

              return (
                <div 
                  key={partido.id}
                  className="group relative bg-gray-700/50 hover:bg-gray-700/70 p-4 rounded-xl transition-all duration-300 border border-gray-600/50"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    {/* Sección Izquierda - Fecha y Condición */}
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-600/30 px-3 py-1 rounded-full text-sm font-medium text-cyan-300">
                          Fecha {partido.fecha}
                        </div>
                        <div className={`flex items-center gap-1 text-sm ${esLocal ? 'text-cyan-400' : 'text-pink-400'}`}>
                          {esLocal ? (
                            <>
                              <MdHome className="inline-block" />
                              <span>Local</span>
                            </>
                          ) : (
                            <>
                              <MdFlight className="inline-block" />
                              <span>Visita</span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Rival */}
                      <div className="flex items-center gap-2 pl-1">
                        <img 
                          src={new URL(`../../assets/banderas/${rival?.logo}`, import.meta.url).href}
                          alt={rival?.name}
                          className="h-6 w-10 object-contain"
                        />
                        <span className="text-base font-bold text-gray-100">
                          {rival?.name}
                        </span>
                      </div>
                    </div>

                    {/* Sección Derecha - Resultado */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        {jugado ? (
                          <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-100">
                                {esLocal ? resultado.golesLocal : resultado.golesVisitante}
                                <span className="text-gray-400 mx-1">-</span>
                                {esLocal ? resultado.golesVisitante : resultado.golesLocal}
                              </span>
                            </div>
                            {resultadoEstado && (
                              <div className="w-full text-right">
                                <span className={`${getResultadoEstilo(resultadoEstado)} px-3 py-1 rounded-full text-sm font-medium`}>
                                  {resultadoEstado}
                                </span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col items-end">
                            <span className="text-gray-400 italic text-sm">Por jugar</span>
                            <span className="text-xs text-gray-500 mt-1">
                              {esLocal ? 'En casa' : 'De visita'}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FixtureEquipo;