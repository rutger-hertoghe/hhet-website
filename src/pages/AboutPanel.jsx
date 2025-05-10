function AboutPanel() {


  return (
    <>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About HHET-BE
        </h2>
        {/* <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Each of our courses is built to reshape instinct, raise awareness, and embed practical skills — equipping individuals to respond with clarity when the unexpected becomes reality.
        </p> */}
      </div>

      <div className="max-w-4xl mx-auto space-y-16 text-gray-800">

        {/* Top Statement */}
        {/* <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-600 uppercase tracking-wider">
            When darkness sets in, let’s keep the light on.
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            In a world shaped by different cultures, beliefs, and systems—and marked by the ever-present risks of unrest, crime, economic instability, or political tension—even ordinary circumstances can escalate quickly.
          </p>
          <p className="text-lg text-gray-700">
            It’s not just rare, large-scale crises that pose a threat. More often, it’s the smaller, everyday incidents that catch us off guard. In those moments, the difference between a reaction and a response can decide the outcome.
          </p>
          <p className="text-lg text-gray-700">
            By integrating a preparedness mindset into daily routines and operational planning—regardless of your role or region—you foster resilience. That small shift in awareness can be the deciding factor between vulnerability and control.
          </p>
        </div> */}

        {/* Founder Quote */}
        <div className="border-l-4 border-yellow-500 text-justify pl-6 bg-gray-100 text-gray-600 italic">
          <p>
            Having spent many years deployed in post-conflict areas, we observed a marked contrast between the way professional armed forces (military and police) and civilian international personnel respond to crisis situations.
          </p>
          <br />
          <p>
            Civilians often view the world through a different lens—one shaped by humanitarian or developmental objectives rather than operational security. As a result, they are more likely to become disoriented or overwhelmed during unexpected crises. Their perception of early warning signs and potential threats differs significantly from that of trained professionals.
          </p>
          <br />
          <p>
            As freelance instructors operating within a strong network of experts, we’ve had the privilege of preparing civilian staff from NGOs and governmental organizations for the realities of crisis management. By reshaping behavior through mindset shifts and heightened situational awareness, we empower individuals to respond more effectively when incidents arise.
          </p>
          <br />
          <p>
            The creation of HHET-BE Training & Consulting was a natural and necessary progression—born from a commitment to share our expertise and support those working in high-risk environments.          </p>
          <p className="mt-2 font-semibold text-right">– L., Founder of HHET-BE</p>
        </div>
      </div>
    </>
  )
}

export default AboutPanel;