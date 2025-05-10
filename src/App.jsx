import { useState } from 'react'
import Navbar from "./components/Navbar"

import ContactForm from "./pages/ContactForm"
import HeroSection from './pages/HeroSection';
import ExpertPanel from './pages/ExpertPanel';
import CoursesPanel from "./pages/CoursesPanel";
import NetworkPanel from './pages/NetworkPanel';
import AboutPanel from './pages/AboutPanel';
import Spacer from './components/Spacer';
import ConceptPanel from './pages/ConceptPanel';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <div >
          <div id="home" className="bg-gray-100 h-screen pt-26">
            <HeroSection />
          </div>

          {/* ---- COURSES ---- */}
          <div id="courses" className="bg-gray-100 h-screen">
            <Spacer />
            <CoursesPanel />
          </div>

          {/* ---- CONCEPT ---- */}
          <div id="concept" className = "bg-gray-100">
            <Spacer/>
            <ConceptPanel/>
          </div>

          {/* ---- TRAINERS ---- */}
          <div id="experts" className="bg-gray-100 h-screen">
            <Spacer />
            <ExpertPanel />
          </div>

          {/* ---- NETWORK ---- */}
          <div id="network" className="bg-gray-100 h-screen">
            <Spacer />
            <NetworkPanel />
          </div>

          {/* --- CONTACT ---*/}
          <div id="contact" className="bg-gray-100 h-screen">
            <Spacer />
            <ContactForm />
          </div>

          {/* ---- ABOUT ---- */}
          <div id="about" className="bg-gray-100 min-h-screen h-full pb-10">
            <Spacer />
            <AboutPanel />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
