import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import entranceImg from '../assets/images/B100_1.jpeg'; 
import roomOverviewImg from '../assets/images/B100_2.jpeg'; 
import headTableImg from '../assets/images/B100_3.jpeg'; 
import seatingImg from '../assets/images/B100_4.jpeg'; 
import closeUpSetupImg from '../assets/images/B100_5.jpeg'; 
import interiorViewImg from '../assets/images/B100_6.jpeg'; 

// IMPORTA TUS LOGOS DE SPONSORS AQUÍ:
import sponsor1Img from '../assets/images/IEEE_Logo.png';
import sponsor2Img from '../assets/images/MTT_Logo.svg';
import sponsor3Img from '../assets/images/BPC_Logo.svg';
import sponsor4Img from '../assets/images/PUCP_Logo.png';
import sponsor5Img from '../assets/images/Telecom_Logo.png';

const About = () => {
  const navigate = useNavigate(); 

  // --- LÓGICA DEL CONTADOR REGRESIVO ---
  const calculateTimeLeft = () => {
    // Fecha objetivo: 25 de mayo de 2026 a las 8:30 AM (Hora de Lima: UTC-5)
    const targetDate = new Date('2026-05-25T08:30:00-05:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      // Si la fecha ya pasó, se queda en ceros
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(timer);
  }, []);

  // Formatear números para que siempre tengan 2 dígitos (ej: 09 en vez de 9)
  const formatNumber = (num) => String(num).padStart(2, '0');

  const auditoriumPhotos = [
    { id: 1, label: 'B100 Entrance', src: entranceImg },
    { id: 2, label: 'Room Overview', src: roomOverviewImg },
    { id: 3, label: 'Front Seating Area', src: headTableImg },
    { id: 4, label: 'Seating Layout', src: seatingImg },
    { id: 5, label: 'Main Stage', src: closeUpSetupImg },
    { id: 6, label: 'Team Roundtable', src: interiorViewImg }
  ];

  return (
    <div className="animate-fadeIn">
      
      {/* Hero Section with Background Image */}
      <header 
        className="relative text-white py-20 md:py-28 px-4 sm:px-8 text-center bg-cover bg-center"
        style={{ 
          // Oscurecí un poquito el degradado (0.6 y 0.7) para que el contador y botones resalten más
          backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.6), rgba(15, 23, 42, 0.7)), url('https://s3.us-east-1.amazonaws.com/ca-webprod/media/bonitos-hoteles-en-miraflores.webp?s=2405427')" 
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-orange-400 uppercase tracking-wide">
            IEEE MTT-S Broadening Participation Committee (BPC)
          </h3>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            International Workshop <br/>
            <span className="text-3xl md:text-5xl lg:text-6xl font-medium text-blue-100 mt-3 block">
              Applied Microwaves: Bridging the gap between Theory and Industry
            </span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
              <span className="block font-bold text-orange-300 mb-1">When</span>
              25-26 May 2026<br/>
              <span className="text-base text-gray-300">8:30 AM</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
              <span className="block font-bold text-orange-300 mb-1">Where</span>
              B100 - Campus PUCP<br/>
              <span className="text-base text-gray-300">Lima, Peru</span>
            </div>
          </div>

          {/* --- CONTADOR REGRESIVO --- */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-10">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 w-20 sm:w-24 shadow-lg">
                <span className="text-2xl md:text-4xl font-bold text-white tabular-nums">
                  {formatNumber(item.value)}
                </span>
                <span className="text-xs md:text-sm text-orange-300 uppercase tracking-wider mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* --- BOTONES DE ACCIÓN --- */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => navigate('/registration')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Register Now
            </button>
            <button 
              onClick={() => navigate('/program')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              View Program
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Layout */}
      <main className="bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        
        {/* Overview del Workshop */}
        <section className="max-w-6xl mx-auto py-20 px-8">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-blue-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center uppercase tracking-wide">
              Welcome to the Workshop
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                <strong className="text-blue-900">A new milestone for microwave engineering in Latin America!</strong> We are pleased to announce that the <em>first IEEE MTT-S Broadening Participation Committee (BPC) Workshop in Peru</em> will be held on May 25-26, 2026. Through keynote sessions, mentorship, collaboration, and knowledge exchange, this workshop empowers students and young professionals to actively engage with the global MTT-S community while bridging academia and industry to unlock new opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Speakers */}
        <section className="max-w-7xl mx-auto pb-20 px-8 text-center border-b border-blue-900/5">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">MTT-S Keynote Speakers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-all group">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-50 group-hover:border-orange-100 transition-colors"></div>
              <h4 className="font-bold text-xl text-blue-900">Anding Zhu</h4>
              <p className="text-sm text-gray-600 font-semibold mt-1">President</p>
              <p className="text-sm text-orange-500 italic font-medium">IEEE MTT-S</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-all group">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-50 group-hover:border-orange-100 transition-colors"></div>
              <h4 className="font-bold text-xl text-blue-900">Debabani Choudhury</h4>
              <p className="text-sm text-gray-600 font-semibold mt-1">Chair</p>
              <p className="text-sm text-orange-500 italic font-medium">IEEE MTT-S BPC</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-all group">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-50 group-hover:border-orange-100 transition-colors"></div>
              <h4 className="font-bold text-xl text-blue-900">Olga Boric Lubecke</h4>
              <p className="text-sm text-gray-600 font-semibold mt-1">Co-Chair</p>
              <p className="text-sm text-orange-500 italic font-medium">IEEE MTT-S BPC/FDC</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-all group">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-50 group-hover:border-orange-100 transition-colors"></div>
              <h4 className="font-bold text-xl text-blue-900">Glauco Fontgalland</h4>
              <p className="text-sm text-gray-600 font-semibold mt-1">Co-Chair</p>
              <p className="text-sm text-orange-500 italic font-medium">IEEE MTT-S BPC/MGA</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-all group">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-50 group-hover:border-orange-100 transition-colors"></div>
              <h4 className="font-bold text-xl text-blue-900">Imran Mehdi</h4>
              <p className="text-sm text-gray-600 font-semibold mt-1">Publications Chair</p>
              <p className="text-sm text-orange-500 italic font-medium">IEEE MTT-S</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-all group">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-50 group-hover:border-orange-100 transition-colors"></div>
              <h4 className="font-bold text-xl text-blue-900">Mohammad Zarifi</h4>
              <p className="text-sm text-gray-600 font-semibold mt-1">DML</p>
              <p className="text-sm text-orange-500 italic font-medium">IEEE MTT-S</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-all group">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-50 group-hover:border-orange-100 transition-colors"></div>
              <h4 className="font-bold text-xl text-blue-900">Jose Rayas Sanchez</h4>
              <p className="text-sm text-gray-600 font-semibold mt-1">Speakers Bureau</p>
              <p className="text-sm text-orange-500 italic font-medium">IEEE MTT-S</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-white shadow-sm hover:shadow-lg transition-all group">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-50 group-hover:border-orange-100 transition-colors"></div>
              <h4 className="font-bold text-xl text-blue-900">Victor Lubecke</h4>
              <p className="text-sm text-gray-600 font-semibold mt-1">Speakers Bureau</p>
              <p className="text-sm text-orange-500 italic font-medium">IEEE MTT-S</p>
            </div>
          </div>
        </section>

        {/* Section 2: Location */}
        <section className="max-w-7xl mx-auto py-20 px-8 border-b border-blue-900/5">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 drop-shadow-sm">Location</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The workshop will be held at the <strong>B100 Auditorium</strong> within the campus of the Pontificia Universidad Católica del Perú (PUCP).
              </p>
              <p className="text-gray-600 font-medium bg-white/60 p-4 rounded-lg border border-white shadow-sm inline-block lg:block">
                Av. Universitaria 1801<br />
                San Miguel, Lima 15088<br />
                Peru
              </p>
            </div>
            
            <div className="lg:w-2/3 w-full h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white relative group">
              <iframe 
                src="https://maps.google.com/maps?q=Complejo+de+Innovacion+Academica+PUCP+Lima&t=&z=16&ie=UTF8&iwloc=&output=embed"                
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="PUCP Location Map"
              ></iframe>
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                 Complejo de Innovación Académica (CIA)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
            {auditoriumPhotos.map(photo => (
              <div key={photo.id} className="rounded-2xl overflow-hidden shadow-sm border-2 border-white group relative h-48 md:h-56 lg:h-64 cursor-pointer hover:border-orange-200 transition-colors">
                <img 
                  src={photo.src}
                  alt={`B100 Auditorium - ${photo.label}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-blue-900/80 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  {photo.label}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Section 3: Sponsors */}
        <section className="py-20 px-8 text-center border-t border-blue-900/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Sponsors</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {/* Sponsor 1 */}
              <div className="w-56 h-32 bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm border border-white hover:shadow-md transition-shadow">
                <img 
                  src={sponsor1Img} 
                  alt="Sponsor 1" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              
              {/* Sponsor 2 */}
              <div className="w-56 h-32 bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm border border-white hover:shadow-md transition-shadow">
                <img 
                  src={sponsor2Img} 
                  alt="Sponsor 2" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              
              {/* Sponsor 3 */}
              <div className="w-56 h-32 bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm border border-white hover:shadow-md transition-shadow">
                <img 
                  src={sponsor3Img} 
                  alt="Sponsor 3" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              
              {/* Sponsor 4*/}
              <div className="w-56 h-32 bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm border border-white hover:shadow-md transition-shadow">
                <img 
                  src={sponsor4Img} 
                  alt="Sponsor 4" 
                  className="max-w-full max-h-full object-contain" 
                /> 
              </div>

              {/* Sponsor 5*/}
              <div className="w-56 h-32 bg-white rounded-2xl flex items-center justify-center p-6 shadow-sm border border-white hover:shadow-md transition-shadow">
                <img 
                  src={sponsor5Img} 
                  alt="Sponsor 5" 
                  className="max-w-full max-h-full object-contain" 
                /> 
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;