// Simulador.jsx
import React, { useState, useMemo } from "react";
import Partido from "../Partido/Partido";
import Tabla from "../Tabla/Tabla";
import { equipos, partidos as partidosIniciales } from "../../dataf/partidos";

const Simulador = () => {
  const [partidos, setPartidos] = useState(partidosIniciales);
  const [fechaActual, setFechaActual] = useState(1);

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Simulador de Posiciones</h1>
      
      <Tabla equipos={equipos} partidos={partidosHastaFechaActual} />
      
      <div className="flex justify-center items-center gap-4 my-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setFechaActual(f => Math.max(1, f - 1))}
          disabled={fechaActual === 1}
        >
          ←
        </button>
        <span className="text-xl font-semibold">Fecha {fechaActual}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setFechaActual(f => Math.min(maxFecha, f + 1))}
          disabled={fechaActual === maxFecha}
        >
          →
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4">Partidos Fecha {fechaActual}</h2>
        {partidosPorFecha[fechaActual]?.map((partido) => (
          <Partido
            key={partido.id}
            partido={partido}
            equipos={equipos}
            onResultChange={handleResultChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Simulador;