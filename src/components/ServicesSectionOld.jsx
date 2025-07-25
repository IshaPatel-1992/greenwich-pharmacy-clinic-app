import React from 'react';
import { Package, Stethoscope, Truck, Syringe } from 'lucide-react'; // Install with: npm install lucide-react

const services = [
  {
    title: "Prescription Refills",
    desc: "Quick and secure prescription refill services to keep you on track.",
    icon: <Package className="w-10 h-10 text-teal-600" />,
  },
  {
    title: "Pharmacist Consultations",
    desc: "Get expert advice tailored to your needs from licensed professionals.",
    icon: <Stethoscope className="w-10 h-10 text-teal-600" />,
  },
  {
    title: "Free Home Delivery",
    desc: "Your medication, delivered safely and on time to your doorstep.",
    icon: <Truck className="w-10 h-10 text-teal-600" />,
  },
  {
    title: "Vaccinations",
    desc: "Stay protected year-round with flu shots and other vaccines.",
    icon: <Syringe className="w-10 h-10 text-teal-600" />,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-12">Our Services</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {services.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="p-6 bg-white border border-teal-100 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-yellow-100 p-4 rounded-full shadow">{icon}</div>
                <h3 className="text-xl font-semibold text-teal-700">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
