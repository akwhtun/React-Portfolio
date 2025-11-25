import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-color text-color">
      <h2 className="text-4xl font-bold poppins-regular text-center mb-12">Contact Me</h2>

      {/* CONTACT CARDS */}
      <div className="flex flex-col md:flex-row inter py-5 justify-center gap-6 px-6">
        {/* PHONE */}
        <a
          href="tel:+959891082064"
          className="flex items-center gap-4 bg-color shadow-md hover:shadow-xl transition rounded-xl p-5 border border-gray-200 hover:-translate-y-1"
        >
          <div className="text-3xl text-color">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <span className="text-lg font-semibold text-color">+95 9891082064</span>
        </a>

        {/* EMAIL */}
        <a
          href="mailto:akwhtun@gmail.com"
          className="flex items-center gap-4 inter bg-color shadow-md hover:shadow-xl transition rounded-xl p-5 border border-gray-200 hover:-translate-y-1"
        >
          <div className="text-3xl text-color">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span className="text-lg font-semibold text-color">akwhtun@gmail.com</span>
        </a>
      </div>

    
      <div className="flex justify-center py-5 gap-6 mt-14">
        <a
          href="https://www.facebook.com/share/1Bg9C8J7jt/"
            target="_blank"
  rel="noopener noreferrer"
          className="rev-bg-color rev-text-color p-4 rounded-2xl shadow-md hover:shadow-xl transition text-2xl hover:-translate-y-1 border border-gray-200"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          href="https://github.com/akwhtun"
            target="_blank"
  rel="noopener noreferrer"
          className="rev-bg-color rev-text-color p-4 rounded-2xl shadow-md hover:shadow-xl transition text-2xl hover:-translate-y-1 border border-gray-200"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/aung-kyaw-wai-htun-b6251031b"
            target="_blank"
  rel="noopener noreferrer"
          className="rev-bg-color rev-text-color p-4 rounded-2xl shadow-md hover:shadow-xl transition text-2xl hover:-translate-y-1 border border-gray-200"
        >
           <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
        <div className="flex justify-center mt-20 py-5">
        <p className="text-2xl text-white text-opacity-0 relative plus-jakarta-sans scrolling text-center">
          Thanks for Scrolling.
        </p>
      </div>
    </div>
  );
}
