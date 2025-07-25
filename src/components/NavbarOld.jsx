
import logo from "../assets/LogoEdit1.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const menuItems = [
    {
      label: "Medical",
      href: "#medical",
      submenu: [
        {
          label: "Family Practice",
          href: "#family-practice",
          desc: "Personalized care for all ages",
        },
        {
          label: "Walk-in Clinic",
          href: "#walk-in",
          desc: "No appointment? No problem.",
        },
        {
          label: "Telemedicine",
          href: "#telemedicine",
          desc: "Virtual appointments at your convenience",
        },
      ],
    },
    {
      label: "Pharmacy",
      href: "#pharmacy",
      submenu: [
        {
          label: "Prescription Services",
          href: "#prescriptions",
          desc: "Easy prescription fills & renewals",
        },
        {
          label: "Consultation",
          href: "#consultation",
          desc: "Talk to our licensed pharmacists",
        },
      ],
    },
    { label: "Our Team", href: "#team" },
    { label: "Transfer Prescription", href: "#transfer" },
    {
      label: "Register Now",
      href: "#register",
      isCTA: true,
    },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with text */}
        <a href="#home" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Greenwich Logo"
            className="h-16 w-auto rounded-xl border-2 border-teal-700 shadow-lg hover:shadow-yellow-400 transition duration-500 hover:scale-105"
          />
          <div className="leading-tight">
            <div
              className="text-1xl text-teal-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Greenwich Medical Clinic
            </div>
            <div
              className="text-sm text-yellow-600"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              & Pharmacy
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-teal-800 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className={`${
                  item.isCTA
                    ? "bg-yellow-400 text-white px-4 py-2 rounded-full shadow hover:bg-yellow-500"
                    : "hover:text-yellow-400"
                } transition duration-300 tracking-wide text-lg`}
              >
                {item.label}
              </a>
              {/* Submenu with descriptions */}
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-50">
                  {item.submenu.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-yellow-50 text-sm text-teal-800"
                    >
                      <div className="font-semibold">{sub.label}</div>
                      <div className="text-xs text-gray-500">{sub.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-teal-800 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-lg px-6 pb-6 space-y-4 text-teal-800 font-semibold transition-max-height duration-300 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {menuItems.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between items-center">
              <a
                href={item.href}
                className={`block py-2 text-lg border-b border-teal-100 ${
                  item.isCTA
                    ? "bg-yellow-400 text-white px-4 py-1 rounded-full shadow hover:bg-yellow-500"
                    : "hover:text-yellow-500"
                }`}
                onClick={() => item.submenu && toggleSubmenu(item.label)}
              >
                {item.label}
              </a>
              {item.submenu && (
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="text-teal-600 text-sm"
                >
                  {openSubmenus[item.label] ? "▲" : "▼"}
                </button>
              )}
            </div>
            {/* Submenu */}
            {item.submenu && openSubmenus[item.label] && (
              <div className="ml-4 mt-2 border-l border-teal-200 pl-4 space-y-2">
                {item.submenu.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="block text-sm text-teal-700 hover:text-yellow-500"
                  >
                    <div className="font-medium">{sub.label}</div>
                    <div className="text-xs text-gray-500">{sub.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
