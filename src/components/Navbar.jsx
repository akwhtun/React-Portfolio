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
      className="bg-background-color fixed top-0 left-0 w-screen"
      style={{ zIndex: 10000, height: '63' }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-light-gray hover:bg-background-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
               <FontAwesomeIcon icon={faBars} className="icon-large"/>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center pr-5 text-light-gray font-poppins font-semibold text-2xl cursor-pointer" onClick={scrollToTop}>
              &lt;AKWH/&gt;
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:bg-btn-hover cursor-pointer font-poppins text-light-gray rounded-md px-3 py-2 text-sm font-medium`}
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:bg-btn-hover cursor-pointer font-poppins text-light-gray rounded-md px-3 py-2 text-sm font-medium `}
                >
                  About
                </Link>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:bg-btn-hover cursor-pointer font-poppins text-light-gray rounded-md px-3 py-2 text-sm font-medium `}
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:bg-btn-hover cursor-pointer font-poppins text-light-gray rounded-md px-3 py-2 text-sm font-medium`}
                >
                  Projects
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetValue}
                  className={`hover:bg-btn-hover cursor-pointer font-poppins text-light-gray rounded-md px-3 py-2 text-sm font-medium`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${mobileMenu ? "" : "hidden"}`} style={{height:'63px'}}>
        <div className="space-y-1 px-2 pb-3 pt-2 bg-background-color">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-btn-hover cursor-pointer font-poppins text-light-gray  block rounded-md px-3 py-2 text-base font-medium`}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-btn-hover cursor-pointer font-poppins text-light-gray  block rounded-md px-3 py-2 text-base font-medium`}
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-btn-hover cursor-pointer font-poppins text-light-gray  block rounded-md px-3 py-2 text-base font-medium`}
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-btn-hover cursor-pointer font-poppins text-light-gray  block rounded-md px-3 py-2 text-base font-medium`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={offsetValue}
            className={` hover:bg-btn-hover cursor-pointer font-poppins text-light-gray  block rounded-md px-3 py-2 text-base font-medium`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
