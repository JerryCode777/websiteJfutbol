import imagenIbanez from '../../assets/ibanez.png';

const ArticuloIbanez = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <article className="relative">
          {/* Encabezado con gradiente */}
          <header className="mb-12 space-y-6 border-b border-gray-800 pb-8">
            <div className="space-y-2">
              <span className="rounded-full bg-sky-900/30 px-4 py-2 text-sm font-medium text-sky-400">
                Fútbol Peruano
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-gray-50">
                Óscar Ibáñez asume el reto: 
                <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}La ruta hacia el Mundial 2026
                </span>
              </h1>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-500">
              <div className="flex items-center">
                <span className="mr-2">🗓</span>
                <time>7 de Marzo, 2025</time>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <span className="mr-2">⏱</span>
                <span>6 min lectura</span>
              </div>
            </div>
          </header>

          {/* Imagen con overlay */}
          <div className="group relative mb-12 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={imagenIbanez}
              alt="Óscar Ibáñez en conferencia de prensa"
              className="h-[560px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-sm text-gray-300">
              Foto: Prensa FPF
            </div>
          </div>

          {/* Contenido principal */}
          <section className="prose prose-lg prose-invert mx-auto max-w-2xl">
            <div className="mb-16 space-y-8">
              <p className="text-xl leading-8 text-gray-300">
                Con una trayectoria que combina experiencia internacional y conocimiento local, 
                Óscar Ibáñez asume el timón de la selección peruana en un momento crucial de 
                las Eliminatorias. Su llegada marca un punto de inflexión estratégico.
              </p>

              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-50">
                  🔥 Motor de cambio
                </h2>
                <p>
                  El exarquero de 54 años plantea una revolución táctica: 
                  <strong className="text-sky-400">"No somos espectadores, somos protagonistas de nuestro destino"</strong>, 
                  declaró durante su presentación ante medios.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-emerald-400">
                  📋 Hoja de ruta inmediata
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                    <span>Reuniones técnicas con jugadores clave</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                    <span>Análisis táctico de rivales directos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                    <span>Plan de captación de talentos en ligas extranjeras</span>
                  </li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-sky-400 pl-6 text-2xl italic leading-relaxed text-gray-200">
                "La presión es un privilegio. Solo los grandes equipos tienen la oportunidad 
                de escribir su historia en momentos como este"
              </blockquote>

              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-50">
                  Estrategia documentada
                </h2>
                <p>
                  Ibáñez reveló durante su presentación un detallado plan de trabajo que incluye:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-900 p-6">
                    <h3 className="mb-2 font-medium text-sky-400">📈 Sistema 4-2-3-1 dinámico</h3>
                    <p className="text-sm text-gray-400">
                      Adaptación táctica según rivales y condiciones del partido
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-900 p-6">
                    <h3 className="mb-2 font-medium text-sky-400">🔄 Rotación inteligente</h3>
                    <p className="text-sm text-gray-400">
                      Gestión científica de cargas físicas para máxima competitividad
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-50">
                  Jugadores clave
                </h2>
                <div className="overflow-hidden rounded-xl border border-gray-800">
                  <table className="w-full">
                    <thead className="bg-gray-900/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sky-400">Posición</th>
                        <th className="px-6 py-4 text-left text-sky-400">Jugador</th>
                        <th className="px-6 py-4 text-left text-sky-400">Rol</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-800">
                        <td className="px-6 py-4">Delantero</td>
                        <td className="px-6 py-4 font-medium">Gianluca Lapadula</td>
                        <td className="px-6 py-4 text-gray-400">Referente ofensivo</td>
                      </tr>
                      <tr className="border-t border-gray-800 bg-gray-900/20">
                        <td className="px-6 py-4">Mediocampista</td>
                        <td className="px-6 py-4 font-medium">Pedro Aquino</td>
                        <td className="px-6 py-4 text-gray-400">Volante de contención</td>
                      </tr>
                      <tr className="border-t border-gray-800">
                        <td className="px-6 py-4">Defensa</td>
                        <td className="px-6 py-4 font-medium">Pedro Gallese</td>
                        <td className="px-6 py-4 text-gray-400">Seguridad en el arco</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Sección relacionada */}
          <div className="mt-16 border-t border-gray-800 pt-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-800 p-6">
                <div className="mb-3 text-sm font-medium text-sky-400">Análisis Táctico</div>
                <h4 className="text-lg font-medium text-gray-100">
                  La evolución del fútbol peruano en la última década
                </h4>
              </div>
              <div className="rounded-xl border border-gray-800 p-6">
                <div className="mb-3 text-sm font-medium text-emerald-400">Entrevista</div>
                <h4 className="text-lg font-medium text-gray-100">
                  Los jóvenes valores que podrían brillar en el proceso
                </h4>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticuloIbanez;