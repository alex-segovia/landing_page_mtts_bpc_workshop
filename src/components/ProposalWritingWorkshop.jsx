import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ProposalWritingWorkshop = () => {
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
              To participate in the <strong>Publications & Proposal Mentoring Workshop</strong>, you must also be registered as an attendee for the main conference event. Have you secured your general pass yet?
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
            
            <div className="inline-block bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm w-max mb-4">
              Student Competition & Mentoring
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight drop-shadow-sm">
              Publications & <br/>
              <span className="text-orange-500">Proposal Mentoring</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Will my paper get accepted? Will my proposal be funded? Join this interactive session to learn the criteria and strategies for success at MTT-S sponsored conferences and journals.
            </p>

            {/* Tarjeta de Aprendizaje */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">What you will learn:</h3>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl leading-none">►</span>
                  Originality and significance of the contribution
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl leading-none">►</span>
                  Common reasons for rejection
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl leading-none">►</span>
                  How to improve your research impact
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl leading-none">►</span>
                  Figure quality and AI use
                </li>
              </ul>
            </div>

            {/* Alerta de "Hands-on" y Premios */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-green-800 text-lg mb-2">Hands-on Activity! ✍️</h4>
              <p className="text-green-700 text-sm leading-relaxed mb-3">
                Learn how to write and work in teams to build a 1-page research proposal summary.
              </p>
              <p className="font-black text-green-800 uppercase tracking-wide text-sm">
                🏆 The best research summaries will be selected for awards!
              </p>
            </div>
            
          </div>

          {/* Columna Derecha: El Formulario de Google (iFrame) */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white p-2 md:p-4 rounded-3xl shadow-xl border border-gray-100 relative">
              <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 rounded-t-full opacity-50"></div>
              
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScJ47crPVvv-ak0Y_b-vUUje7L17GDouLFEhh0NfNSjNRMWmA/viewform" 
                width="100%" 
                height="850" 
                frameBorder="0" 
                className="rounded-2xl w-full"
                title="Mentoring Workshop Registration Form"
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

export default ProposalWritingWorkshop;