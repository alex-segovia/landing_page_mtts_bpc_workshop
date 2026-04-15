import About from "./components/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Program from "./components/Program"
import Registration from "./components/Registration"
import ProposalWritingWorkshop from "./components/ProposalWritingWorkshop"
import DesignCompetition from "./components/DesignCompetition"
import ThreeMinutesCompetition from "./components/ThreeMinutesCompetition"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound"

function App() {
  return (
    <BrowserRouter basename="/workshop2026">
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
        <Navbar />
        
        {/* Aquí es donde React Router inyecta la vista dependiendo de la URL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/mentoring" element={<ProposalWritingWorkshop />} />
            <Route path="/design-competition" element={<DesignCompetition />} />
            <Route path="/3mpc-competition" element={<ThreeMinutesCompetition />} />
            <Route path="*" element={<NotFound />} />
            {/*<Route path="/sponsor" element={<SponsorRegistration />} />
            <Route path="/travel" element={<TravelGrants />} />*/}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
