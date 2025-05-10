function ConceptPanel() {
  return (
    <>
      <section className="bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Training Concept</h2>
            <p className="text-lg text-justify text-gray-700">
              At HHET-BE, we provide EU-aligned training rooted in the standards of the ENTRi “IN CONTROL” handbook, as endorsed by the European Security and Defence College. Our programs are specifically tailored to meet the needs of civilian professionals operating in crisis-prone environments—NGO staff, journalists, academics, businesspeople, and field researchers alike.
            </p><br />
            <p className="text-lg text-gray-700 mx-auto">
              We don’t just deliver content—we shape capability.</p>
            <p className="text-lg text-gray-700 text-justify mx-auto"><br />
              Every course is designed to empower participants with the awareness, mindset, and behavioral tools necessary to stay safe, make sound decisions under pressure, and support organizational resilience. Each training is adapted to the objectives of your mission or institution, and is built on one foundational principle: personal responsibility in high-risk environments begins with personal readiness.
            </p>
          </div>

          {/* Methodology */}
          <div className="flex flex-row">
            <div className="w-2/3 space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800">How We Train</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Active participation:</strong> Learners are not passive recipients but engaged contributors—challenged to reflect on their own perceptions, instincts, and decisions.</li>
                <li><strong>Peer dialogue:</strong> Training includes open discussions, idea exchanges, and real-time reflection.</li>
                <li><strong>Real-world application:</strong> Programs combine lectures, exercises, debates, and field-based simulations.</li>
              </ul>
              <br />
              <p className="bottom-0 text-gray-700">
                Courses are typically delivered over multiple consecutive days, hosted at suitable venues, and tailored to your organization’s needs.
              </p><br/>
              <h3 className="text-2xl font-semibold text-gray-800">Training Outcomes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Recognize early warning signs in complex environments</li>
                <li>Adapt rapidly to high-stress, dynamic scenarios</li>
                <li>Make grounded decisions under pressure</li>
                <li>Enhance team safety and organizational resilience</li>
              </ul>
            </div>

            {/* Outdoor Training Highlight */}
            <div className="w-1/3 h-full bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">Back to Basics – Outdoor Training Option</h3>
              <p className="text-gray-800 text-justify">
                For sessions held in Belgium, HHET-BE offers an optional outdoor training module in partnership with{" "}
                <a href="https://outsiderlimburg.be" target="_blank" rel="noopener noreferrer" className="underline text-yellow-700 hover:text-yellow-800">
                  The Outsider Limburg
                </a>.
                This add-on transforms the experience into a physically immersive, back-to-basics training—ideal for testing adaptability, teamwork, and leadership in raw conditions.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mx-auto text-center">
            Our participants return more capable, more confident, and more prepared to lead with clarity—when it matters most.
          </p>

        </div>
      </section>
    </>
  )
}

export default ConceptPanel;