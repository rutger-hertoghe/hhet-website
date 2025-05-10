import { faEnvelope, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection(){
  function ScrollToElement(elementId){
    const el = document.getElementById(elementId);
    el.scrollIntoView({behavior: "smooth"});
  }
  return(
    <>
  <div className="max-w-5xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      From Reaction to Response
    </h1>
    <p className="text-xl md:text-2xl text-gray-700 mb-4">
      Real-world crisis training for those who don’t wear uniforms.
    </p>
    <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
      At HHET-BE Training & Consulting, we don’t teach textbook theory. We transform mindset and behavior through immersive, experience-driven training led by instructors who’ve served in the world’s most volatile environments.
    </p>
    <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-10">
      Prepare your people — not with fear, but with readiness.
    </p>
    <div className="flex justify-center space-x-4">
      <button
        onClick={()=>{ScrollToElement("courses")}}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
      >
        <FontAwesomeIcon icon={faListUl}/> Explore Our Programs
      </button>
      <button type="button"
        onClick={() => {ScrollToElement("contact")}}
        className="bg-white border border-gray-300 hover:border-gray-500 text-gray-700 font-semibold py-3 px-6 rounded-xl transition duration-300"
      >
        <FontAwesomeIcon icon={faEnvelope} /> Contact Us
      </button>
    </div>
  </div>
    </>
  )
}

export default HeroSection;