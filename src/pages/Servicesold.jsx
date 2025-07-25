import React from 'react';

const services = [
  {
    title: 'Prescription Refills',
    description: 'Fast and easy refill services, in-store or online.',
    icon: '💊',
  },
  {
    title: 'Home Delivery',
    description: 'Get your medications delivered to your door.',
    icon: '🚚',
  },
  {
    title: 'Health Consultations',
    description: 'Speak with certified pharmacists for personal guidance.',
    icon: '🩺',
  },
  {
    title: 'Vaccinations',
    description: 'Flu shots and travel vaccines available by appointment.',
    icon: '💉',
  },
];

export default function Services() {
  return (
    <section className="p-8 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold text-teal-600 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
