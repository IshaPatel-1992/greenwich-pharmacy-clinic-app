import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-teal-700">Greenwich Clinic</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 font-semibold text-teal-800">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-yellow-500 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-teal-800 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-lg px-6 pb-6 space-y-4 text-teal-800 font-semibold transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block py-2 hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
