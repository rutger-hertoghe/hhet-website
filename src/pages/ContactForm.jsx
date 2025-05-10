function ContactForm() {
  return (
    <>
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Contact Details
    </h2>
    <p className="text-gray-700 text-md md:text-lg mb-4">
      Please note that HHET-BE responds exclusively to inquiries via email.
    </p>
    <p className="text-gray-600 text-sm md:text-base mb-4">
      Due to the operational nature of our work and the intensity of our training schedules, response times may vary. We will attend to your message as promptly as possible.
    </p>
    <p className="text-gray-600 text-sm md:text-base">
      Thank you for your interest in our training programs. We look forward to assisting you.
    </p>
  </div>

  <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl shadow text-left">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">HHET-BE Training & Consulting</h3>
    <ul className="space-y-2 text-sm text-gray-700">
      <li>
        <strong>Email:</strong>{" "}
        <a href="mailto:info@hhet.be" className="text-blue-600 hover:underline">
          info@hhet.be
        </a>
      </li>
      <li>
        <strong>Registered Office:</strong> [Insert Address if applicable]
      </li>
      <li>
        <strong>VAT:</strong> BE [Insert VAT Number]
      </li>
      <li>
        <strong>Company Number:</strong> [Insert Company Number]
      </li>
      <li>
        <strong>Website:</strong>{" "}
        <a href="https://www.hhet.be" className="text-blue-600 hover:underline">
          www.hhet.be
        </a>
      </li>
    </ul>
  </div>
  </>
  )
}

export default ContactForm;