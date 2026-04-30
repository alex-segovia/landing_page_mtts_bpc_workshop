import { useState } from "react";

const Program = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [format, setFormat] = useState('list');

  // Estructura de datos completa para ambos días
  const scheduleData = {
    day1: {
      date: "Monday, May 25, 2026",
      venue: "B100, PUCP Campus, Lima, Perú",
      theme: "Evolution of MHz to THz Technologies for Sensing and Communication",
      items: [
        { 
          type: "break", 
          time: "8:30 - 9:00", 
          title: "Arrival and Registration", 
          location: "Front Desk"
        },
        {
          type: "session",
          time: "9:00 - 9:40",
          sessionName: "Opening Session",
          chair: "Manuel Yarlequé",
          talks: [
            { time: "9:00 - 9:05", tag: "Plenary 1", title: "General Chair (Welcome Remarks)", presenter: "Manuel Yarlequé (PUCP)" },
            { time: "9:05 - 9:10", tag: "Plenary 2", title: "University Chairman (Welcome Remarks)", presenter: "Francisco Rumiche (PUCP)" },
            { time: "9:10 - 9:20", tag: "Plenary 3", title: "IEEE MTT-S President (Welcome Remarks) and MTT-S Overview", presenter: "Anding Zhu (IEEE MTT-S)" },
            { time: "9:20 - 9:50", tag: "Plenary 4", title: "Broadening Participation with Application Oriented RF to THz Technologies in the AI Era", presenter: "Debabani Choudhury (IEEE MTT-S BPC)" }
          ]
        },
        { 
          type: "break", 
          time: "9:50 - 10:00", 
          title: "Group photo (Official)", 
          bgClass: "bg-blue-100 text-blue-800" 
        },
        {
          type: "session",
          time: "10:00 - 11:00",
          sessionName: "MTT-S Session 1",
          chair: "Olga Boric Lubecke",
          talks: [
            { time: "10:00 - 10:30", tag: "Keynote 1", title: "Powering the Future of Wireless: Efficiency and Linearity Challenges in 6G Transmitters", presenter: "Anding Zhu (IEEE MTT-S)" },
            { time: "10:30 - 11:00", tag: "Keynote 2", title: " Microwave Engineering for Space Exploration", presenter: "Imran Mehdi (IEEE MTT-S)" }
          ]
        },
        { 
          type: "break", 
          time: "11:00 - 11:15", 
          title: "Coffee/Tea Break", 
          bgClass: "bg-orange-100 text-orange-800" 
        },
        {
          type: "special",
          time: "11:15 - 11:30",
          sessionName: "Student Competition",
          title: "3MPC (Three Minute Presentation Competition)",
          presenter: "Jose Rayas (IEEE MTT-S), Glauco Fontgalland (IEEE MTT-S BPC/MGA)"
        },
        {
          type: "session",
          time: "11:30 - 13:00",
          sessionName: "MTT-S Session 2",
          chair: "Glauco Fontgalland (IEEE MTT-S BPC/MGA)",
          talks: [
            { time: "11:30 - 12:00", tag: "Keynote 3", title: "ISAC Biomedical Sensing", presenter: "Victor Lubecke (IEEE MTT-S)" },
            { time: "12:00 - 12:15", tag: "Keynote 4", title: "Smart Microwave Sensors Bridging Laboratory to Industry", presenter: "Mohammad Zarifi (IEEE MTT-S)" },
            { time: "12:15 - 12:45", tag: "Keynote 5", title: "Space Mapping Design Optimization: Power in Simplicity Rooted in Engineering Practice", presenter: "Jose Rayas (IEEE MTT-S)" }
          ]
        },
        { 
          type: "break", 
          time: "13:00 - 14:00", 
          title: "Lunch", 
          bgClass: "bg-orange-100 text-orange-800" 
        },
        {
          type: "session",
          time: "14:00 - 14:30",
          sessionName: "MTT-S Mentoring",
          chair: "",
          talks: [
            { time: "14:00 - 14:30", tag: "Keynote 6", title: "How to write technical articles and Academic Proposals for MTT-S", presenter: "Olga Boric Lubecke (IEEE MTT-S BPC)" }
          ]
        },
        {
          type: "special",
          time: "14:30 - 15:30",
          sessionName: "Student Competition & Mentoring",
          title: "IEEE MTT-S Publications & Proposal Mentoring",
          presenter: ""
        },
        { 
          type: "break", 
          time: "15:30 - 16:00", 
          title: "Afternoon Coffee Break and Networking with Students", 
          bgClass: "bg-orange-100 text-orange-800" 
        },
        {
          type: "special",
          time: "16:00 - 19:00",
          sessionName: "Student Competition",
          title: "Student Design Competition",
          presenter: "Manuel Yarlequé"
        }
      ]
    },
    day2: {
      date: "Tuesday, May 26, 2026",
      venue: "B100, PUCP Campus, Lima, Perú",
      theme: "Coming soon",
      items: [
        { 
          type: "break", 
          time: "8:30 - 9:00", 
          title: "Arrival and Registration", 
          location: "Front Desk"
        },
        {
          type: "session",
          time: "9:00 - 10:35",
          sessionName: "Latin America (LAM) MTT-S Engagement Session",
          chair: "",
          talks: [
            { time: "9:00 - 9:25", tag: "LAM Keynote 1", title: "Latin America + MTT-S MGA", presenter: "Glauco Fontgalland (IEEE MTT-S BPC/MGA)" },
            { time: "9:25 - 9:35", tag: "LAM Keynote 2", title: "Latin America Re-engagement", presenter: "Jose Rayas (IEEE MTT-S)" },
            { time: "9:35 - 9:50", tag: "LAM Keynote 3", title: "MTT-S Technologies and Engagement in Peru", presenter: "Manuel Yarlequé (PUCP)" },
            { time: "9:50 - 10:35", tag: "MTT-S in Latin America: Panel Discussion", title: "Panel 1: Enhancing IEEE MTT-S Engagement and Creating Impacts in the Latin America Region with BPC Activities: Challenges and Opportunities", presenter: "Anding Zhu (IEEE MTT-S), Glauco Fontgalland (IEEE MTT-S BPC/MGA), Manuel Yarlequé (PUCP), Ebert San Román (UCSP), Gustavo Siles (UPB), Jose Rayas (IEEE MTT-S), Sthefany Alvarez (PUCP)", moderator: "Debabani Choudhury (IEEE MTT-S BPC)" }
          ]
        },
        { 
          type: "break", 
          time: "10:35 - 10:50", 
          title: "Coffee/Tea Break", 
          bgClass: "bg-blue-100 text-blue-800" 
        },
        {
          type: "session",
          time: "10:50 - 11:20",
          sessionName: "Regional Faculty Session",
          chair: "Manuel Yarlequé",
          talks: [
            { time: "10:50 - 11:05", tag: "Keynote 5", title: "MABIS sistema wearable no invasivo capaz de realizar detección temprana de cáncer de mama mediante el uso de tecnología de imágenes por microondas", presenter: "Ebert San Román (UCSP)" },
            { time: "11:05 - 11:20", tag: "Keynote 6", title: "Radio Communication in Bolivia", presenter: "Gustavo Siles (UPB)" }
          ]
        },
        {
          type: "session",
          time: "11:20 - 13:00",
          sessionName: "Industry Session",
          chair: "Manuel Yarlequé",
          talks: [
            { time: "11:20 - 11:35", tag: "Industry Keynote 1", title: "La industria aeroespacial: experiencia y  oportunidades en Perú", presenter: "Martin Sarango (Quantum Defense and Space, PUCP)" },
            { time: "12:00 - 12:15", tag: "Industry Keynote 2", title: "Gilat Company", presenter: "Coming soon" },
            { time: "12:15 - 13:00", tag: "Industry/Academia Panel Discussion", title: "Panel 2: Industry/Academia Engagement in South American Landscape", presenter: "Martin Sarango (Quantum Defense and Space, PUCP), Gilat, Ebert San Román (UCSP), Glauco Fontgalland (IEEE MTT-S BPC/MGA), Jose Rayas (IEEE MTT-S), Anding Zhu (IEEE MTT-S), Olga Boric Lubecke (IEEE MTT-S BPC), Imran Mehdi (IEEE MTT-S), Victor Lubecke (IEEE MTT-S)", moderator: "Debabani Choudhury (IEEE MTT-S BPC)" }
          ]
        },
        {
          type: "session",
          time: "13:00 - 14:00",
          sessionName: "Student Event",
          chair: "",
          talks: [
            { time: "13:00 - 14:00", tag: "Group Mentoring Event", title: "7-10 Mentors", presenter: "Anding Zhu (IEEE MTT-S), Glauco Fontgalland (IEEE MTT-S BPC/MGA), Jose Rayas (IEEE MTT-S), Manuel Yarlequé (PUCP), Ebert San Román (UCSP), Victor Lubecke (IEEE MTT-S), Olga Boric Lubecke (IEEE MTT-S BPC), Debabani Choudhury (IEEE MTT-S BPC)" }
          ]
        },
        
        { 
          type: "break", 
          time: "14:00 - 14:45", 
          title: "Lunch",
          bgClass: "bg-orange-100 text-orange-800" 
        },
        {
          type: "special",
          time: "14:45 - 15:15",
          sessionName: "Award Session",
          title: "Announce the Winners of Three Competitions; Award Distribution, Volunteer Certificates",
          presenter: "Sthefany Alvarez (PUCP)"
        },
        { 
          type: "break", 
          time: "15:40 - 15:45", 
          title: "Final Photo Session", 
          bgClass: "bg-orange-100 text-orange-800" 
        },
        {
          type: "special",
          time: "15:45 - 15:50",
          sessionName: "",
          title: "Close Workshop",
          presenter: "Manuel Yarlequé (PUCP), Debabani Choudhury (IEEE MTT-S BPC)"
        }
      ]
    }
  };

  const currentDay = scheduleData[selectedDay];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 animate-fadeIn min-h-[70vh]">
      
      {/* Cabecera del Cronograma */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Technical Program</h2>
        <p className="text-lg font-semibold text-gray-700">{currentDay.theme}</p>
        <p className="text-gray-500">{currentDay.venue}</p>
      </div>

      {/* CONTROLES SUPERIORES: Días y Formato */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 border-b-2 border-gray-200 pb-2">
        
        {/* Selector de Días */}
        <div className="flex gap-2">
          <button 
            onClick={() => setSelectedDay('day1')}
            className={`px-6 py-3 font-bold text-sm md:text-base rounded-t-lg transition-all ${selectedDay === 'day1' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            May 25 (Day 1)
          </button>
          <button 
            onClick={() => setSelectedDay('day2')}
            className={`px-6 py-3 font-bold text-sm md:text-base rounded-t-lg transition-all ${selectedDay === 'day2' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            May 26 (Day 2)
          </button>
        </div>

        {/* Selector de Formato Visual */}
        <div className="flex bg-gray-200 rounded-lg p-1 shadow-inner">
          <button 
            onClick={() => setFormat('list')}
            className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${format === 'list' ? 'bg-white shadow text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
          >
            ≡ List View
          </button>
          <button 
            onClick={() => setFormat('calendar')}
            className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${format === 'calendar' ? 'bg-white shadow text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
          >
            ⊞ Calendar View
          </button>
        </div>
      </div>

      {/* RENDERIZADO CONDICIONAL BASADO EN EL FORMATO */}
      {format === 'list' ? (
        
        /* === VISTA LISTA === */
        <div className="space-y-6">
          {currentDay.items.map((item, index) => {
            if (item.type === "break") {
              return (
                <div key={index} className={`rounded-lg p-4 text-center font-bold shadow-sm ${item.bgClass || 'bg-gray-200 text-gray-700'}`}>
                  {item.time} — {item.title} {item.location && <span className="font-normal text-sm ml-2">({item.location})</span>}
                </div>
              );
            }
            if (item.type === "special") {
              return (
                <div key={index} className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <span className="text-green-700 font-bold mb-2 md:mb-0">{item.time}</span>
                    {item.sessionName && (
                      <span className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                        {item.sessionName}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h3>
                  {item.presenter && <p className="text-gray-600 mt-2">By: {item.presenter}</p>}
                </div>
              );
            }
            if (item.type === "session") {
              return (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-blue-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
                    <div>
                      <span className="font-mono text-blue-200 mr-4">{item.time}</span>
                      <span className="text-lg font-bold uppercase tracking-wider">{item.sessionName || "Session"}</span>
                    </div>
                    {/* Renderizado de Chair o Moderator a nivel de SESIÓN */}
                    {(item.chair || item.moderator) && (
                      <div className="mt-2 md:mt-0 text-sm flex gap-4">
                        {item.chair && <div><span className="text-blue-300">Chair: </span><span className="font-semibold">{item.chair}</span></div>}
                        {item.moderator && <div><span className="text-orange-300">Moderator: </span><span className="font-semibold">{item.moderator}</span></div>}
                      </div>
                    )}
                  </div>
                  <div className="divide-y divide-gray-100">
                    {item.talks.map((talk, idx) => (
                      <div key={idx} className="p-4 hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-4">
                        <div className="md:w-32 flex-shrink-0">
                          <div className="text-sm font-bold text-gray-600">{talk.time}</div>
                          <div className="text-xs text-orange-600 font-bold uppercase mt-1">{talk.tag}</div>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-800 leading-tight">{talk.title}</h4>
                          {/* Renderizado de Moderator a nivel de CHARLA/PANEL */}
                          {talk.moderator && <p className="text-sm text-blue-700 mt-1 font-semibold">Moderator: {talk.moderator}</p>}
                          {talk.presenter && <p className="text-sm text-gray-600 mt-1">Speakers: {talk.presenter}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>

      ) : (

        /* === VISTA CALENDARIO === */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {currentDay.items.map((item, index) => {
            
            if (item.type === "break") {
              return (
                <div key={index} className={`rounded-xl p-6 shadow-sm border-t-4 flex flex-col justify-center items-center text-center h-full min-h-[150px] ${item.bgClass ? item.bgClass + ' border-orange-400' : 'bg-gray-100 border-gray-400 text-gray-700'}`}>
                  <span className="font-black text-xl mb-2">{item.time}</span>
                  <span className="font-bold text-lg leading-tight">{item.title}</span>
                  {item.location && <span className="text-sm mt-3 opacity-75">{item.location}</span>}
                </div>
              );
            }

            if (item.type === "special") {
              return (
                <div key={index} className="bg-green-50 rounded-xl shadow-md border-t-4 border-green-500 p-6 flex flex-col h-full">
                  <span className="text-green-700 font-black text-lg">{item.time}</span>
                  <div className="mt-2">
                    {item.sessionName && (
                      <span className="bg-green-200 text-green-800 text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                        {item.sessionName}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mt-4 leading-snug">{item.title}</h3>
                  {item.presenter && <p className="text-sm text-gray-600 mt-auto pt-4 font-medium">By: {item.presenter}</p>}
                </div>
              );
            }

            if (item.type === "session") {
              return (
                <div key={index} className="bg-white rounded-xl shadow-md border-t-4 border-blue-900 p-6 flex flex-col h-full">
                  <div className="mb-5 pb-4 border-b border-gray-100">
                    <span className="font-mono text-blue-700 font-bold text-lg">{item.time}</span>
                    <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mt-1 leading-tight">
                      {item.sessionName || "General Session"}
                    </h3>
                    {/* Renderizado de Chair/Moderator a nivel de SESIÓN */}
                    {item.chair && <p className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-wide">Chair: {item.chair}</p>}
                    {item.moderator && <p className="text-xs text-blue-600 mt-1 font-medium uppercase tracking-wide">Moderator: {item.moderator}</p>}
                  </div>
                  
                  <div className="flex-grow space-y-3">
                    {item.talks.map((talk, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg border-l-2 border-orange-500 hover:bg-orange-50 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-gray-500">{talk.time}</span>
                          <span className="text-[10px] font-black text-orange-600 uppercase bg-orange-100 px-1.5 py-0.5 rounded">{talk.tag}</span>
                        </div>
                        <h4 className="text-sm font-bold text-gray-800 leading-tight">{talk.title}</h4>
                        {/* Renderizado de Moderator a nivel de CHARLA/PANEL */}
                        {talk.moderator && <p className="text-[11px] text-blue-700 mt-1 font-bold">Moderator: {talk.moderator}</p>}
                        {talk.presenter && <p className="text-xs text-gray-600 mt-1 italic">Speakers: {talk.presenter}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
      
    </div>
  );
};

export default Program;