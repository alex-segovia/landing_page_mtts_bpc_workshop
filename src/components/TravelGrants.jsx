const TravelGrants = () => (
  <div className="max-w-4xl mx-auto py-16 px-8 animate-fadeIn text-center min-h-[70vh]">
    <h2 className="text-3xl font-bold text-blue-900 mb-6">Travel Grants</h2>
    <p className="text-gray-700 mb-8 leading-relaxed">
      Fomentamos la participación de estudiantes e investigadores de todo el país y el extranjero. 
      Postula a nuestras becas de viaje rellenando el formulario inferior.
    </p>
    <iframe 
      src="https://docs.google.com/forms/d/e/TU_ID_AQUI/viewform?embedded=true" 
      width="100%" height="800" frameBorder="0" marginHeight="0" marginWidth="0"
      className="bg-white shadow-lg rounded-lg"
      title="Travel Form"
    >Cargando…</iframe>
  </div>
);

export default TravelGrants;