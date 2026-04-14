import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DesignCompetition = () => {
  // Estado para controlar el pop-up inicial
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {/* --- POP-UP / MODAL INICIAL --- */}
      {showModal && (
        <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm z-[100] flex items-center justify-center px-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center border-t-4 border-orange-500 relative">
            
            {/* Ícono de información */}
            <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              ℹ️
            </div>
            
            <h3 className="text-2xl font-bold text-blue-900 mb-3">
              Important Requirement
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              To participate in the <strong>Student Design Competition</strong>, you must also be registered as an attendee for the main conference event. Have you secured your general pass yet?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Botón para ir al registro principal */}
              <button 
                onClick={() => navigate('/registration')}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto"
              >
                Go to Main Registration
              </button>
              
              {/* Botón para quedarse en esta vista */}
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
          
          {/* Columna Izquierda: Información extraída del Flyer */}
          <div className="lg:w-5/12 w-full flex flex-col justify-center">
            
            <div className="inline-block bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm w-max mb-4 uppercase tracking-wide">
              BPC 2026 Competition
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight drop-shadow-sm">
              Student Design <br/>
              <span className="text-orange-500">Competition</span>
            </h2>
            
            <h3 className="text-2xl font-black text-blue-800 mb-6 tracking-tight">
              Design. Simulate. Innovate.
            </h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Take on the challenge to design a microwave device or system using <strong>CST Studio Suite</strong> and solve practical engineering problems. Develop hands-on design experience and encourage creative problem-solving.
            </p>

            {/* Tarjeta del Reto */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Design Challenge:</h3>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl leading-none">►</span>
                  Design a microwave component, circuit, or system.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl leading-none">►</span>
                  Use CST Studio Suite for simulation and validation.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl leading-none">►</span>
                  Meet the technical requirements defined in the challenge brief.
                </li>
              </ul>
            </div>

            {/* Alerta de Participación */}
            <div className="bg-blue-900 border-l-4 border-orange-500 p-6 rounded-r-2xl shadow-md text-white">
              <h4 className="font-bold text-orange-400 text-lg mb-2">Who can participate? 👥</h4>
              <p className="text-blue-100 text-sm leading-relaxed mb-3">
                Open to undergraduate, graduate, and PhD students (with MTT-S membership), in <strong>teams of up to four</strong>.
              </p>
              <p className="font-black text-white uppercase tracking-wide text-sm mt-4">
                🏆 Accept the challenge and win prizes!!
              </p>
            </div>
            
          </div>

          {/* Columna Derecha: El Formulario de Google (iFrame) */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white p-2 md:p-4 rounded-3xl shadow-xl border border-gray-100 relative">
              <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 rounded-t-full opacity-50"></div>
              
              {/* iFrame de Google Forms (Usando el mismo temporalmente) */}
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc5f307dSX4xISulA6wj5PK6Y3OMkmNeettWz1YCZWGVevNuw/viewform" 
                width="100%" 
                height="850" 
                frameBorder="0" 
                className="rounded-2xl w-full"
                title="Design Competition Registration Form"
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

export default DesignCompetition;