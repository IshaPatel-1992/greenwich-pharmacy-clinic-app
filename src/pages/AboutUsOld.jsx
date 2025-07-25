import React from 'react';

export default function AboutUs() {
  return (
    <section className="p-8 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-teal-700 mb-4">About Us</h2>
      <p className="text-gray-700 text-lg mb-6">
        At Greenwich Pharmacy, we are committed to delivering personalized healthcare with a focus on wellness, compassion, and community support.
      </p>
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-teal-600 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            We aim to empower our customers with access to affordable medications, expert consultations, and reliable healthcare solutions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-teal-600 mb-2">Our Team</h3>
          <p className="text-gray-600">
            Our licensed pharmacists and healthcare staff bring years of experience, care, and dedication to serving your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
