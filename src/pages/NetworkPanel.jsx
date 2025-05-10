const PartnerLogo = ({ src, alt, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-105 transition-transform"
  >
    <img
      src={src}
      alt={alt}
      className="h-12 md:h-16 object-contain border border-gray-200 rounded-md"
    />
  </a>
);

function NetworkPanel() {
  return (
    <>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Network
        </h2>
        <p className="text-gray-600 text-lg text-justify max-w-3xl pb-10 mx-auto">
          HHET-BE’s trainer network brings together several decades of combined experience across national and international executive services, civilian cooperation organizations, EU CSDP missions, United Nations peacekeeping operations, peace-building efforts, and CivPol missions around the globe. Our team members have been deployed in both military and civilian capacities to post-conflict zones in regions such as the Middle East (Iraq, Yemen), South Asia (Afghanistan, Pakistan), Central Africa (Mali, DRC, Niger), and the Balkans, among others.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        <h3 className="text-xl md:text-2xl text-center text-bold text-gray-600 mb-4">
          Our Partners
        </h3>
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <PartnerLogo src="/Partners/Inspiration4You.webp" alt="Inspiration4You" href="https://www.inspiration4you.eu/" />
          <PartnerLogo src="/Partners/Wodan.webp" alt="Wodan" href="https://www.wodaninternational.com/" />
          <PartnerLogo src="/Partners/CDO.webp" alt="CDO" href="https://cdotraining.eu/" />
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <PartnerLogo src = "/Partners/krisenwerk.webp" alt = "Krisenwerk" href ="https://krisenwerk.de/"/>
          <PartnerLogo src = "/Partners/GFA.webp" alt = "GFA" href = "https://www.gfa-group.de/"/>
        </div>
      </div>
    </>
  )
}

export default NetworkPanel;