import ContactForm from "./Sections/ContactForm"
import HeroSection from './Sections/HeroSection';
import ExpertPanel from './Sections/ExpertPanel';
import CoursesPanel from "./Sections/CoursesPanel";
import NetworkPanel from './Sections/NetworkPanel';
import AboutPanel from './Sections/AboutPanel';
import Spacer from '../../components/Spacer';
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
          <Spacer />
          <CoursesPanel />
        </div>

        {/* ---- CONCEPT ---- */}
        <div id="concept" className="bg-gray-100">
          {/* <Spacer /> */}
          <ConceptPanel />
        </div>

        {/* ---- TRAINERS ---- */}
        <div id="experts" className="bg-gray-100 md:min-h-dvh">
          {/* <Spacer /> */}
          <ExpertPanel />
        </div>

        {/* ---- NETWORK ---- */}
        <div id="network" className="bg-gray-100 md:min-h-dvh">
          {/* <Spacer /> */}
          <NetworkPanel />
        </div>

        {/* --- CONTACT ---*/}
        <div id="contact" className="bg-gray-100 md:min-h-dvh">
          {/* <Spacer /> */}
          <ContactForm />
        </div>

        {/* ---- ABOUT ---- */}
        <div id="about" className="bg-gray-100 md:min-h-dvh pb-10">
          {/* <Spacer /> */}
          <AboutPanel />
        </div>

        {/* ---- REVIEWS ---- */}
        <div id="reviews" className="bg-gray-100 md:min-h-dvh pb-10">
          {/* <Spacer/> */}
          <ReviewSection/>
        </div>
      </div>
    </main>
  )
}