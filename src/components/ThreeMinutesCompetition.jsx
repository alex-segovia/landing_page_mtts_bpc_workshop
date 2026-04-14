import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThreeMinutesCompetition = () => {
  // Estado para controlar el pop-up inicial
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {/* --- POP-UP / MODAL INICIAL --- */}
      {showModal && (
        <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-[100] flex items-center justify-center px-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center border-t-4 border-orange-500 relative">
            <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ℹ️
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Important Requirement
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              To participate in the <strong>Three Minute Presentation Competition (3MPC)</strong>, you must also be registered as an attendee for the main conference event. Have you secured your general pass yet?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/registration')}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto"
              >
                Go to Main Registration
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto"
              >
                I'm already registered
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- CONTENIDO PRINCIPAL A DOS COLUMNAS --- */}
      <div className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 animate-fadeIn min-h-[80vh] flex items-center py-16">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-12 w-full">
          
          {/* Columna Izquierda: Información extraída de los Flyers */}
          <div className="lg:w-5/12 w-full flex flex-col justify-center">
            
            <div className="inline-block bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm w-max mb-4 uppercase tracking-wide">
              3MPC Competition
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight drop-shadow-sm">
              Three Minute <br/>
              <span className="text-orange-500">Presentation</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Step into the spotlight and pitch your ideas, research, or innovations to a panel of non-specialist judges using <strong>just one static slide</strong>. You have exactly <strong>3 minutes</strong> to make it engaging, accessible, and unforgettable.
            </p>

            {/* Categorías (Inglés y Español) */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Presentation Categories</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-800">English Category</h4>
                  <p className="text-sm text-gray-600 mt-1">Present your original research, ideas, or applications clearly communicating complex concepts to a non-specialist audience.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-gray-800">Spanish Category</h4>
                  <p className="text-sm text-gray-600 mt-1">Present topics aligned with the workshop theme in Spanish, delivering impactful content for a non-technical audience.</p>
                </div>
              </div>
            </div>

            {/* Fechas Importantes y Detalles Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-900 text-white p-5 rounded-2xl shadow-md">
                <h4 className="font-bold text-orange-400 mb-3 text-sm uppercase tracking-wide">Important Dates</h4>
                <ul className="text-sm space-y-2">
                  <li><span className="font-bold">May 10:</span> Video Deadline</li>
                  <li><span className="font-bold">May 14:</span> Finalists Announced</li>
                  <li><span className="font-bold">May 16-18:</span> Online Mentoring</li>
                  <li><span className="font-bold text-orange-300">May 25:</span> Grand Finale!</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-100 p-5 rounded-2xl shadow-sm">
                <h4 className="font-bold text-orange-800 mb-2 text-sm uppercase tracking-wide">Who can participate?</h4>
                <p className="text-sm text-orange-900 mb-3">Undergraduate, Graduate, and PhD students.</p>
                
                <h4 className="font-bold text-orange-800 mb-1 text-sm uppercase tracking-wide">Judging Criteria</h4>
                <ul className="text-sm text-orange-900 list-disc pl-4">
                  <li>Clarity for non-technical audience</li>
                  <li>Storytelling & structure</li>
                  <li>Overall impact</li>
                </ul>
              </div>
            </div>
            
          </div>

          {/* Columna Derecha: El Formulario de Google (iFrame) */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white p-2 md:p-4 rounded-3xl shadow-xl border border-gray-100 relative">
              <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 rounded-t-full opacity-50"></div>
              
              {/* iFrame de Google Forms */}
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSci3zhBOxTWOu5w4OF_zWMQ91slcuo9BOJQmseGOgwxVeuyEQ/viewform" 
                width="100%" 
                height="900" 
                frameBorder="0" 
                className="rounded-2xl w-full"
                title="3MPC Registration Form"
              >
                Loading...
              </iframe>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ThreeMinutesCompetition;