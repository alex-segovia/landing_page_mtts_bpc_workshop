import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 min-h-[80vh] flex items-center justify-center p-6 animate-fadeIn">
      <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-blue-50 text-center max-w-2xl w-full relative overflow-hidden">
        
        {/* Acento visual superior */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900"></div>
        
        {/* Número 404 gigante */}
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 mb-6 drop-shadow-sm">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Oops! Page not found
        </h2>
        
        <p className="text-gray-600 mb-10 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Botón para regresar al inicio */}
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;