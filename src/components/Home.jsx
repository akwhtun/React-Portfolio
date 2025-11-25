import React from 'react';
import AUNG_KYAW_WAI_HTUN_Resume from "../download/AUNG-KYAW-WAI-HTUN-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../App.css';

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = AUNG_KYAW_WAI_HTUN_Resume;
    link.download = "AUNG-KYAW-WAI-HTUN-Resume";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between text-color bg-color px-6 sm:px-10 md:px-16 py-16 md:py-24 gap-16 md:gap-0"
    >
      {/* LEFT CONTENT */}
      <div className="md:w-3/5 w-full flex flex-col justify-center items-start text-center md:text-left sm:mt-0 mt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold plus-jakarta-sans text-color leading-tight">
          Aung Kyaw Wai Htun
        </h1>

        <p className="text-lg sm:text-xl text-color inter mt-3 font-medium">
          Full-Stack Developer
        </p>

        <p className="text-base sm:text-lg font-bold poppins-regular text-color max-w-xl mt-6 leading-relaxed">
          I'm a motivated full-stack developer who enjoys building robust, clean,
          and maintainable applications. I have strong foundations in software
          engineering principles (SOLID, OOD, DSA) and experience using UML,
          sequence diagrams, and design-to-code workflows to create clear and
          efficient development structures.
        </p>

        <button
          className="mt-8 sm:mt-10 rev-bg-color rev-text-color hover:bg-gray-900 px-5 sm:px-6 py-3 rounded-xl shadow transition inter text-base sm:text-lg flex items-center mx-auto md:mx-0"
          onClick={handleDownload}
        >
          <FontAwesomeIcon icon={faCircleArrowDown} className="mr-2" />
          Download CV
        </button>
      </div>

      {/* RIGHT SOCIAL ICONS */}
      <div className="md:w-1/5 w-full flex flex-col items-center mt-10 md:mt-0">
        {/* CONNECT LABEL + CENTER LINE */}
        <div className="flex flex-col items-center mb-8">
          <p className="uppercase tracking-[0.3em] plus-jakarta-sans font-extrabold text-color text-xs sm:text-sm mb-3">
            Connect
          </p>
          <div className="w-[2px] h-20 sm:h-24 rev-bg-color rounded-full"></div>
        </div>

        {/* ICONS CENTERED UNDER THE LINE */}
        <div className="flex md:flex-col gap-6 sm:gap-8 items-center">
          <a
            href="https://www.facebook.com/share/1Bg9C8J7jt/"
            target="_blank"
            rel="noopener noreferrer"
            className="rev-bg-color rev-text-color p-3 sm:p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-xl sm:text-2xl hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://github.com/akwhtun"
            target="_blank"
            rel="noopener noreferrer"
            className="rev-bg-color rev-text-color p-3 sm:p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-xl sm:text-2xl hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/aung-kyaw-wai-htun-b6251031b"
            target="_blank"
            rel="noopener noreferrer"
            className="rev-bg-color rev-text-color p-3 sm:p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-xl sm:text-2xl hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
}
