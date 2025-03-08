const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            JeyFutbolPe: Innovación en Análisis Deportivo
          </h1>
          <p className="text-xl text-gray-400">
            Revolucionando la comprensión del fútbol peruano mediante tecnología avanzada
          </p>
        </header>

        <section className="mb-14">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-sky-400 border-l-4 border-sky-500 pl-4">
              Nuestra Misión Estratégica
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              En JeyFutbolPe, hemos establecido un nuevo estándar en el análisis predictivo del fútbol profesional. 
              Nuestra plataforma combina ciencia de datos de vanguardia con inteligencia deportiva para ofrecer:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <li className="flex items-start">
                <span className="text-sky-400 mr-3">▹</span>
                Modelos predictivos con 92% de precisión histórica
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-3">▹</span>
                Análisis multivariable de desempeño en tiempo real
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-3">▹</span>
                Simulaciones probabilísticas basadas en machine learning
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-3">▹</span>
                Integración de más de 150 métricas de rendimiento
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-14">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-sky-400 border-l-4 border-sky-500 pl-4">
              Excelencia Multidisciplinaria
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Equipo de Desarrollo</h3>
                <p className="mb-4">
                  Nuestro equipo técnico, liderado por ingenieros con experiencia en FIFA Analytics, 
                  desarrolla soluciones escalables utilizando:
                </p>
                <ul className="space-y-2">
                  <li>• ReactJS y Node.js para arquitectura frontend</li>
                  <li>• Python para procesamiento de datos masivos</li>
                  <li>• AWS para infraestructura cloud enterprise</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Consejo Deportivo</h3>
                <p>
                  Contamos con la asesoría de profesionales certificados por:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>• Ex técnicos de la FPF (Federación Peruana de Fútbol)</li>
                  <li>• Analistas FIFA Pro con 10+ años de experiencia</li>
                  <li>• Especialistas en nutrición y preparación física</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-sky-400 border-l-4 border-sky-500 pl-4">
              Tecnología de Vanguardia
            </h2>
            <div className="flex flex-wrap gap-8 mb-6">
              <div className="flex-1 min-w-[250px]">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Motor Predictivo</h3>
                <p>
                  Sistema basado en redes neuronales recurrentes (RNN) entrenado con:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>• 15+ años de datos históricos de la Liga 1</li>
                  <li>• 500,000+ eventos de juego etiquetados</li>
                  <li>• Datos meteorológicos y de rendimiento físico</li>
                </ul>
              </div>
              <div className="flex-1 min-w-[250px]">
                <h3 className="text-xl font-semibold mb-3 text-green-300">Visualización de Datos</h3>
                <p>
                  Interfaz interactiva desarrollada con:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>• D3.js para gráficos avanzados</li>
                  <li>• Three.js para modelado 3D de tácticas</li>
                  <li>• Dashboards personalizables en tiempo real</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="text-center py-8">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            ¿Listo para transformar tu comprensión del fútbol?
          </h3>
          <button to="/contacto" className="bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Contactanos
          </button>
        </section> */}
      </div>
    </div>
  );
};

export default About;