import { Link } from 'react-router-dom';

const Registration = () => (
  <div className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 animate-fadeIn min-h-[80vh] flex items-center py-16">
    
    <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-12 w-full">
      
      {/* Columna Izquierda: Información y Textos */}
      <div className="lg:w-5/12 w-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight drop-shadow-sm">
          Join the <br/>
          <span className="text-orange-500">Workshop</span>
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Secure your spot by completing the registration form. Spaces for the in-person sessions at the PUCP campus are limited, so we encourage early registration.
        </p>

        {/* Tarjeta de "Qué incluye" */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">What's included in your pass?</h3>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl leading-none">✓</span>
              Full access to all keynote sessions and panels
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl leading-none">✓</span>
              Networking opportunities with international industry leaders
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl leading-none">✓</span>
              Coffee breaks and official lunch
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl leading-none">✓</span>
              Digital certificate of attendance (IEEE MTT-S)
            </li>
          </ul>
        </div>

        {/* NUEVO: Recordatorio de Actividades Especiales */}
        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 shadow-sm relative overflow-hidden">
          {/* Acento visual lateral */}
          <div className="absolute left-0 top-0 w-1.5 h-full bg-orange-400"></div>
          
          <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2 text-lg">
            <span>🚀</span> Enhance your experience!
          </h4>
          <p className="text-sm text-orange-800 mb-4 leading-relaxed">
            After securing your general pass, don't forget to sign up for our exclusive hands-on activities (limited spots available):
          </p>
          <ul className="text-sm text-orange-900 font-semibold space-y-2 mb-4">
            <li>• Three Minute Presentation (3MPC)</li>
            <li>• CST Student Design Competition</li>
            <li>• Publications & Proposal Mentoring</li>
          </ul>
          <p className="text-xs text-orange-700 italic">
            * Navigate to the <strong>Get Involved</strong> menu above to register for these specific sessions.
          </p>
        </div>

      </div>

      {/* Columna Derecha: El Formulario (iFrame) */}
      <div className="lg:w-7/12 w-full">
        <div className="bg-white p-2 md:p-4 rounded-3xl shadow-xl border border-gray-100 relative">
          <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 rounded-t-full opacity-50"></div>
          
          <iframe 
            src="https://luma.com/embed/event/evt-3oNvxKrTs7byNw7/simple" 
            width="100%" 
            height="750" 
            frameBorder="0" 
            className="rounded-2xl w-full"
            title="Registration Form"
          >
            Loading...
          </iframe>
        </div>
      </div>

    </div>
  </div>
);

export default Registration;