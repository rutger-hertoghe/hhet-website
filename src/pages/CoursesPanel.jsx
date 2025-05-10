import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem';
import RightHandPanel from "../components/RightHandPanel";
import LeftHandPanel from '../components/LeftHandPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function CoursesPanel() {

  const bigYellow = function (string) {
    return (
      <span className="text-5xl text-yellow-400">{string}</span>
    )
  }

  function ScrollToElement(elementId) {
    const el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Courses
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Each of our courses is built to reshape instinct, raise awareness, and embed practical skills — equipping individuals to respond with clarity when the unexpected becomes reality.
        </p>
      </div>

      <Carousel sectionName="courses">
        <CarouselItem>
          <RightHandPanel imageLink={`${import.meta.env.BASE_URL}deescalation_placeholder.webp`}>
            <h2 className="text-3xl font-bold mb-6">{bigYellow("D")}E-ESCALATION  {bigYellow("T")}ECHNIQUES & {bigYellow("R")}ESOURCES</h2>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
            <br />
            <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 1 Day</span>
          </RightHandPanel>
        </CarouselItem>
        <CarouselItem>
          <LeftHandPanel imageLink={`${import.meta.env.BASE_URL}travel_risk_placeholder.jpg`}>
            <h2 className="text-3xl font-bold mb-6">{bigYellow("T")}RAVEL {bigYellow("S")}ECURITY {bigYellow("A")}WARENESS {bigYellow("T")}RAINING</h2>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
            <br />
            <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 1 Day</span>
          </LeftHandPanel>
        </CarouselItem>
        <CarouselItem>
          <RightHandPanel imageLink={`${import.meta.env.BASE_URL}emergency_care_placeholder.jpg`}>
            <h2 className="text-3xl font-bold mb-6">{bigYellow("E")}MERGENCY {bigYellow("C")}ASUALTY {bigYellow("C")}ARE</h2>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
            <br />
            <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 2 Days</span>
          </RightHandPanel>
        </CarouselItem>
        <CarouselItem>
          <LeftHandPanel imageLink={`${import.meta.env.BASE_URL}first_aid_placeholder.jpg`}>
            <h2 className="text-3xl font-bold mb-6">{bigYellow("F")}IRST {bigYellow("A")}ID {bigYellow("T")}RAINING</h2>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
            <br />
            <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 2 Days</span>
          </LeftHandPanel>
        </CarouselItem>
        <CarouselItem>
          <RightHandPanel imageLink={`${import.meta.env.BASE_URL}heat_placeholder.webp`}>
            <h2 className="text-3xl font-bold mb-6">{bigYellow("H")}OSTILE {bigYellow("E")}NVIRONMENT {bigYellow("A")}WARENESS {bigYellow("T")}RAINING</h2>
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
            <br />
            <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 3-7 Days</span>
          </RightHandPanel>
        </CarouselItem>
      </Carousel>
      <div className="flex justify-center">
        <button type="button"
          onClick={() => { ScrollToElement("contact") }}
          className="bg-white border border-gray-300 hover:border-gray-500 text-gray-700 font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Contact Us
        </button>
      </div>
    </>
  )
}

export default CoursesPanel;