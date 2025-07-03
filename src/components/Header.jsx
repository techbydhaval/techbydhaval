import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const navItems = ["home", "skills", "projects", "experience", "contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-blue-600 font-bold text-lg">Dhaval Patel</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="text-blue-600 font-semibold"
              className="cursor-pointer hover:text-blue-600 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              activeClass="text-blue-600 font-semibold"
              className="block text-sm text-gray-700 hover:text-blue-600"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
