import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen((pre) => !pre);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Close menu if it was open (for mobile interaction)
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Adjusted offset to match the 80px height
  const offsetValue = -80; 

  return (
    <nav
      // ADDED: shadow-lg class to reintroduce the shadow below the navbar
      className="bg-color text-color fixed top-0 left-0 w-full shadow-lg transition-all duration-300"
      style={{ zIndex: 10000, height: "80px" }} 
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[80px]">
        {/* Main Flex container now uses h-full to fit the 80px parent height */}
        <div className="flex h-full items-center justify-between">
          
          {/* LOGO - Always on the left */}
          <div
            className="flex flex-none justify-start text-color plus-jakarta-sans font-semibold text-2xl cursor-pointer transition duration-300 hover:opacity-80"
            onClick={scrollToTop}
          >
            <span>&lt;AKWH/&gt;</span>
          </div>

          {/* DESKTOP MENU - Hidden on Mobile */}
          <div className="hidden sm:flex space-x-2 lg:space-x-4 text-color bg-color plus-jakarta-sans">
            {[
              { to: "home", label: "Home" },
              { to: "skills", label: "Skills" },
              { to: "projects", label: "Projects" },
              { to: "contact", label: "Contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={offsetValue} 
                className="cursor-pointer rounded-md px-3 lg:px-5 py-2 text-medium font-medium hover:bg-gray-900 hover:text-gray-200 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* MOBILE MENU BUTTON - Always on the right on mobile */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={handleMobileMenu}
              className="w-10 h-10 flex items-center justify-center rounded-md rev-bg-color rev-text-color hover:bg-gray-900 transition-all duration-300"
              aria-expanded={mobileMenuOpen}
            >
              <FontAwesomeIcon 
                icon={mobileMenuOpen ? faTimes : faBars} 
                className={`text-xl transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
              />
            </button>
          </div>
          
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU with ANIMATION */}
      <div 
        className={`sm:hidden plus-jakarta-sans absolute w-full top-[80px] left-0 transform origin-top transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >    
        <div className="space-y-1 px-4 pb-3 pt-2 bg-color text-color shadow-xl">
          {[
            { to: "home", label: "Home" },
            { to: "skills", label: "Skills" },
            { to: "projects", label: "Projects" },
            { to: "contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={offsetValue}
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
              className="block cursor-pointer rounded-md px-3 py-3 text-base font-medium hover:bg-gray-900 hover:text-gray-200 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}