import React from 'react';
import heroImage from '../assets/HeroSectionImages/Img5.jpeg';  // Update with your actual path

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-teal-900 bg-opacity-60"></div>

      <div className="relative max-w-3xl px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Empower Your Health Journey
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
          Discover personalized care, wellness resources, and expert guidance — all in one place.
        </p>
        <button
          onClick={() => scrollTo('about')}
          className="bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold px-10 py-4 rounded-lg shadow-lg transition duration-300"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
