
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">Send Us a Message</h2>
          <form className="grid gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-700 text-white py-3 rounded-md hover:bg-yellow-400 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-teal-700">Contact Information</h2>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-teal-700 text-xl mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-teal-700 text-xl mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p>info@greenwichpharmacy.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-teal-700 text-xl mt-1" />
            <div>
              <p className="font-semibold">Address</p>
              <p>123 Wellness St, Airdrie, AB, Canada</p>
            </div>
          </div>
          <div>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-teal-700 px-4 py-2 rounded-md hover:bg-yellow-400 transition"
            >
              <FaDirections /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
