import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((pre) => !pre);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const offsetValue = -63;
  return (
    <nav
      className="bg-color text-color border-b-2 fixed top-0 left-0 w-screen"
      style={{ zIndex: 10000, height: '63' }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute outline-none inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 rev-text-color rev-bg-color hover:bg-gray-900 hover:text-gray-200 outline-none focus:ring-2 focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon 
   icon={faBars} 
   className="icon-large outline-none focus:outline-none"
/>

            </button>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center pr-5 text-color plus-jakarta-sans font-semibold text-2xl cursor-pointer" onClick={scrollToTop}>
              &lt;AKWH/&gt;
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-color bg-color plus-jakarta-sans ">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:text-gray-200 hover:bg-gray-900 cursor-pointer  rounded-md px-3 py-2 text-medium font-medium`}
                >
                  Home
                </Link>
              
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:text-gray-200 hover:bg-gray-900 cursor-pointer  rounded-md px-3 py-2 text-medium font-medium `}
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:text-gray-200 hover:bg-gray-900 cursor-pointer  rounded-md px-3 py-2 text-medium font-medium`}
                >
                  Projects
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:text-gray-200 hover:bg-gray-900 cursor-pointer  rounded-md px-3 py-2 text-medium font-medium`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${mobileMenu ? "" : "hidden"}`} style={{height:'63px'}}>
        <div className="space-y-1 px-2 pb-3 pt-2 bg-color text-color">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-gray-900 hover:text-gray-200 cursor-pointer block rounded-md px-3 py-2 text-base font-medium`}
          >
            Home
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-gray-900 hover:text-gray-200 cursor-pointer   block rounded-md px-3 py-2 text-base font-medium`}
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-gray-900 hover:text-gray-200 cursor-pointer   block rounded-md px-3 py-2 text-base font-medium`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-gray-900 hover:text-gray-200 cursor-pointer   block rounded-md px-3 py-2 text-base font-medium`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
