const Politica = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-sky-400 mb-8">Política de Privacidad</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Recopilación de Datos</h2>
          <p className="mb-4">
            JeyFutbolPe- no recopila datos personales de sus usuarios excepto aquellos 
            proporcionados voluntariamente a través de formularios de contacto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Uso de la Información</h2>
          <p className="mb-4">
            La información proporcionada se utiliza exclusivamente para mejorar la 
            experiencia del usuario y nunca es compartida con terceros.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
          <p>
            Utilizamos cookies técnicas para el funcionamiento básico del simulador. 
            Puedes gestionarlas desde la configuración de tu navegador.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Politica;