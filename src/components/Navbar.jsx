import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((pre) => !pre);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const offsetValue = -63;

  return (
    <nav
      className="bg-color text-color border-b-2 fixed top-0 left-0 w-full shadow-md"
      style={{ zIndex: 10000, height: "63px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* MOBILE MENU BUTTON */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={handleMobileMenu}
              className="px-4 py-3 w-12 h-12  flex items-center justify-center rounded-md rev-bg-color rev-text-color hover:bg-gray-900 transition focus:ring-2 focus:ring-inset"
            >
              <FontAwesomeIcon icon={faBars} className="text-3xl" />
            </button>
          </div>

          {/* LOGO */}
          <div
            className="flex flex-1 justify-center sm:justify-start pr-5 text-color plus-jakarta-sans font-semibold text-2xl cursor-pointer"
            onClick={scrollToTop}
          >
            <span>&lt;AKWH/&gt;</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden sm:flex space-x-4 text-color bg-color plus-jakarta-sans">
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
                className="cursor-pointer rounded-md px-5 py-3  text-medium font-medium hover:bg-gray-900 hover:text-gray-200 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`sm:hidden plus-jakarta-sans transition-all duration-300 ${mobileMenu ? "max-h-60" : "max-h-0 overflow-hidden"}`}>        
        <div className="space-y-1 px-4 pb-3 pt-2 bg-color text-color shadow-md">
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
              onClick={() => setMobileMenu(false)}
              className="block cursor-pointer rounded-md px-3 py-3 text-base font-medium hover:bg-gray-900 hover:text-gray-200 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
