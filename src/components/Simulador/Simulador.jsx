// Simulador.jsx
import React, { useState, useMemo } from "react";
import Partido from "../Partido/Partido";
import Tabla from "../Tabla/Tabla";
import FixtureEquipo from "../FixtureEquipo/FixtureEquipo";
import { FaYoutube } from "react-icons/fa";
import { equipos, partidos as partidosIniciales } from "../../dataf/partidos";

const Simulador = () => {
  const [partidos, setPartidos] = useState(partidosIniciales);
  const [fechaActual, setFechaActual] = useState(15);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);

  // Agrupar partidos por fecha
  const partidosPorFecha = useMemo(() => {
    return partidos.reduce((acc, partido) => {
      const fecha = partido.fecha;
      if (!acc[fecha]) acc[fecha] = [];
      acc[fecha].push(partido);
      return acc;
    }, {});
  }, [partidos]);

  // Máxima fecha disponible
  const maxFecha = Object.keys(partidosPorFecha).length;

  const handleResultChange = (partidoId, golesLocal, golesVisitante) => {
    const nuevosPartidos = partidos.map((partido) =>
      partido.id === partidoId
        ? { ...partido, golesLocal, golesVisitante }
        : partido
    );
    setPartidos(nuevosPartidos);
  };

  // Partidos hasta la fecha actual para la tabla
  const partidosHastaFechaActual = partidos.filter(p => p.fecha <= fechaActual);

  return (
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen slide-up">
      {/* Modal de Fixture */}
      {equipoSeleccionado && (
        <FixtureEquipo 
          equipo={equipoSeleccionado}
          equipos={equipos}
          todosLosPartidos={partidos}
          fechaActual={fechaActual}
          onClose={() => setEquipoSeleccionado(null)} // ✅ Cierra correctamente
        />
      )}
      {/* Contenido principal */}
      {!equipoSeleccionado && (
        <>
          <div className="flex justify-center gap-2 mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              La Calculadora JeyFutbol-Pe
            </h1>
            <FaYoutube className="text-red-600 text-3xl md:text-4xl hover:text-red-500 transition-colors -mb-1" />
          </div>

          <Tabla 
            equipos={equipos} 
            partidos={partidosHastaFechaActual} 
            fechaActual={fechaActual}
            todosLosPartidos={partidos}
            onTeamClick={setEquipoSeleccionado} // ✅ Así debe estar
          />

          {/* Navegación de fechas */}
          <div className="flex justify-center items-center gap-3 md:gap-4 my-4 md:my-6">
            <button
              className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg 
                        transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              onClick={() => setFechaActual(f => Math.max(1, f - 1))}
              disabled={fechaActual === 1}
            >
              ←
            </button>
            <span className="text-lg md:text-xl font-semibold text-gray-300">Fecha {fechaActual}</span>
            <button
              className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg 
                        transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              onClick={() => setFechaActual(f => Math.min(maxFecha, f + 1))}
              disabled={fechaActual === maxFecha}
            >
              →
            </button>
          </div>

          {/* Partidos de la fecha */}
          <div className="mx-auto max-w-2xl px-2 md:px-4">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4 text-gray-300">
              Partidos Fecha {fechaActual}
            </h2>
            <div className="space-y-2 md:space-y-3">
              {partidosPorFecha[fechaActual]?.map((partido) => (
                <Partido
                  key={partido.id}
                  equipos={equipos}
                  partidos={partidosHastaFechaActual}
                  fechaActual={fechaActual}
                  todosLosPartidos={partidosIniciales}
                  partido={partido}
                  onResultChange={handleResultChange}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Simulador;