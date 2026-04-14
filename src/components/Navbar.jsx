import { useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import logoMtts from '../assets/images/logoMTTS.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const location = useLocation();

  // Clase para los enlaces de escritorio
  const getLinkClass = (path) => {
    return `transition-colors py-1 whitespace-nowrap ${
      location.pathname === path 
        ? 'text-white border-b-2 border-orange-500 font-semibold' 
        : 'text-gray-300 hover:text-white'
    }`;
  };

  // Clase para los enlaces de móvil (borde a la izquierda en lugar de abajo)
  const getMobileLinkClass = (path) => {
    return `transition-colors py-3 px-4 block whitespace-nowrap ${
      location.pathname === path 
        ? 'text-white border-l-4 border-orange-500 font-semibold bg-slate-800/50' 
        : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
    }`;
  };

  // Función para cerrar todo al hacer clic en un enlace
  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4 gap-8">
          
          {/* Logo en Imagen */}
          <Link to="/" onClick={closeMenus} className="cursor-pointer hover:opacity-80 transition-opacity flex items-center">
            <img 
              src={logoMtts}
              alt="IEEE MTT-S PUCP Logo" 
              className="h-10 md:h-12 w-auto object-contain max-w-[200px] sm:max-w-[250px] lg:max-w-none" 
            />
          </Link>

          {/* BOTÓN HAMBURGUESA PARA MÓVIL (Visible solo en lg:hidden) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  // Ícono de X (Cerrar)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Ícono de Hamburguesa (Abrir)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* MENÚ DE ESCRITORIO (Oculto en pantallas pequeñas) */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center font-medium shrink-0">
            <Link to="/" className={getLinkClass('/')}>About the Event</Link>
            <Link to="/program" className={getLinkClass('/program')}>Program</Link>
            <Link to="/registration" className={getLinkClass('/registration')}>Registration</Link>
            {/*<Link to="/travel" className={getLinkClass('/travel')}>Travel Grants</Link>
            <Link to="/sponsor" className={getLinkClass('/sponsor')}>Sponsors</Link>*/}

            {/* DROPDOWN: Get Involved */}
            <div className="relative ml-2">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center gap-2 font-bold shadow-md whitespace-nowrap"
              >
                Get Involved {isDropdownOpen ? '▲' : '▼'}
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-2xl py-2 z-10 text-sm">
                  <Link 
                    to="/3mpc-competition"
                    onClick={closeMenus}
                    className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-semibold"
                  >
                    3MPC Competition
                  </Link>
                  <Link 
                    to="/design-competition"
                    onClick={closeMenus}
                    className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-semibold border-t border-gray-50"
                  >
                    Student Design Competition
                  </Link>
                  <Link 
                    to="/mentoring"
                    onClick={closeMenus}
                    className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-semibold border-t border-gray-50"
                  >
                    Publications & Proposal Mentoring
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-700 animate-fadeIn">
          <div className="flex flex-col py-4">
            <Link to="/" onClick={closeMenus} className={getMobileLinkClass('/')}>About the Event</Link>
            <Link to="/program" onClick={closeMenus} className={getMobileLinkClass('/program')}>Program</Link>
            <Link to="/registration" onClick={closeMenus} className={getMobileLinkClass('/registration')}>Registration</Link>
            {/*<Link to="/travel" onClick={closeMenus} className={getMobileLinkClass('/travel')}>Travel Grants</Link>
            <Link to="/sponsor" onClick={closeMenus} className={getMobileLinkClass('/sponsor')}>Sponsors</Link>*/}

            {/* Separador para actividades "Get Involved" */}
            <div className="pt-4 mt-2 border-t border-slate-700/50">
              <span className="text-orange-500 font-bold px-4 mb-2 block uppercase tracking-wider text-xs">
                Get Involved
              </span>
              <div className="flex flex-col">
                <Link to="/3mpc-competition" onClick={closeMenus} className={getMobileLinkClass('/3mpc-competition')}>
                  ► 3MPC Competition
                </Link>
                <Link to="/design-competition" onClick={closeMenus} className={getMobileLinkClass('/design-competition')}>
                  ► Student Design Competition
                </Link>
                <Link to="/mentoring" onClick={closeMenus} className={getMobileLinkClass('/mentoring')}>
                  ► Publications & Proposal Mentoring
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;