import { faShieldAlt, faStar,  faUserShield, faGlobe, faMedkit, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExpLine({icon, children})
{
  return(
    <li><FontAwesomeIcon icon = {icon} className="mr-2 text-gray-500"/>{children}</li>
  )
}

function ExpertCard({name, mainExp, children, languages})
{
  return(
    <>
    {/* Trainer L */}
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-300 hover:shadow-lg transition text-left">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-3 text-sm flex items-center gap-2">
        <FontAwesomeIcon icon={faShieldAlt} className="text-yellow-500" />
        {mainExp}
      </p>
      <ul className="list-inside text-sm text-gray-600 mb-3 space-y-1">
        {children}
      </ul>
      <p className="text-sm text-gray-500 mt-3 flex items-center">
        <FontAwesomeIcon icon={faLanguage} className="mr-2 text-yellow-500" />
        Proficient in: {languages}
      </p>
    </div>
    </>
  )
}

function ExpertPanel(){
  return(
    <>
  {/* <section className="bg-white py-20 px-6"> */}
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Our Experts
    </h2>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
HHET-BE brings together a select network of certified trainers with extensive law enforcement, crisis response, and international deployment backgrounds.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <ExpertCard name = "Trainer L. (Belgium)" 
                mainExp ="International operations & law enforcement"
                languages = "Dutch, French, German, English">
      <ExpLine icon = {faStar}>Firearms Specialist & EU Range Officer</ExpLine>
      <ExpLine icon = {faUserShield}>Tactical & Emergency Care Instructor</ExpLine>
      <ExpLine icon = {faGlobe}>Hostile Environment Awareness Trainer</ExpLine>
      <ExpLine icon = {faMedkit}>FPOS BTEC Level 2, Breacher</ExpLine>
      <ExpLine icon = {faStar}>Crisis Management & ASP Certified</ExpLine>
    </ExpertCard>
    <ExpertCard name = "Trainer T.Z. (Germany)"
                mainExp = "International operations & law enforcement"
                languages = "German, English, Dutch">
      <ExpLine icon = {faGlobe}>WPS, Gender & Human Rights</ExpLine>
      <ExpLine icon = {faUserShield}>HEAT Trainer, Close Protection</ExpLine>
      <ExpLine icon = {faMedkit}>First Aid & TCCC Certified</ExpLine>
    </ExpertCard>
    <ExpertCard name = "Trainer T. (Belgium)"
                mainExp = "Law enforcement"
                languages = "English, French, Dutch">
      <ExpLine icon = {faUserShield}>Use of Force & Tactical Intervention</ExpLine>
      <ExpLine icon = {faMedkit}>TECC & Martial Arts Certified</ExpLine>
      <ExpLine icon = {faStar}>Breacher & ASP Instructor</ExpLine>
    </ExpertCard>
  </div>
    </>
  )
}

export default ExpertPanel;