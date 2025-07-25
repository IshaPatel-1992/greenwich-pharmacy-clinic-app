import React from 'react';
import { FaPills, FaTruck, FaStethoscope, FaMortarPestle } from 'react-icons/fa';

const services = [
  { icon: <FaPills />, title: 'Prescription Refills', desc: 'Quick and accurate prescription services.' },
  { icon: <FaTruck />, title: 'Free Delivery', desc: 'Bringing medications right to your door.' },
  { icon: <FaStethoscope />, title: 'Health Consultations', desc: 'Professional advice for your well-being.' },
  { icon: <FaMortarPestle />, title: 'Compounding', desc: 'Custom medications for unique needs.' },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-teal-700 mb-10">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-teal-600 text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
