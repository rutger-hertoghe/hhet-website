import ContactForm from "./Sections/ContactForm"
import HeroSection from './Sections/HeroSection';
import ExpertPanel from './Sections/ExpertPanel';
import CoursesPanel from "./Sections/CoursesPanel";
import NetworkPanel from './Sections/NetworkPanel';
import AboutPanel from './Sections/AboutPanel';
import ConceptPanel from './Sections/ConceptPanel';
import ReviewSection from "./Sections/ReviewSection";

export default function Page() {
  return (
    <main>
      <div>
        {/* <div id="home" className="bg-gray-100 h-screen pt-26"> */}
          <HeroSection />
        {/* </div> */}

        {/* ---- COURSES ---- */}
        <div id="courses" className="bg-gray-100 md:min-h-dvh">
          <CoursesPanel />
        </div>

        {/* ---- CONCEPT ---- */}
        <div id="concept" className="bg-gray-100">
          <ConceptPanel />
        </div>

        {/* ---- TRAINERS ---- */}
        <div id="experts" className="bg-gray-100 md:min-h-dvh">
          <ExpertPanel />
        </div>

        {/* ---- NETWORK ---- */}
        <div id="network" className="bg-gray-100 md:min-h-dvh">
          <NetworkPanel />
        </div>

        {/* --- CONTACT ---*/}
        <div id="contact" className="bg-gray-100 md:min-h-dvh">
          <ContactForm />
        </div>

        {/* ---- ABOUT ---- */}
        <div id="about" className="bg-gray-100 md:min-h-dvh pb-10">
          <AboutPanel />
        </div>

        {/* ---- REVIEWS ---- */}
        <div id="reviews" className="bg-gray-100 md:min-h-dvh pb-10">
          <ReviewSection/>
        </div>
      </div>
    </main>
  )
}