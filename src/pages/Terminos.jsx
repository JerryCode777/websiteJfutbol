// src/pages/Terminos.jsx
const Terminos = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-sky-400 mb-8">Términos y Condiciones</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Uso del Simulador</h2>
          <p className="mb-4">El simulador de resultados JeyFutbolPe- es una herramienta informativa basada en algoritmos estadísticos. Los resultados generados no constituyen pronósticos oficiales ni garantizan resultados reales.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Propiedad Intelectual</h2>
          <p>Todos los contenidos incluyendo logos, diseños y algoritmos son propiedad exclusiva de JeyFutbolPe-. Queda prohibida su reproducción total o parcial sin autorización escrita.</p>
        </section>

      </div>
    </div>
  );
};

export default Terminos;