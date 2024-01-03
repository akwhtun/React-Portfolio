import React from 'react'
import file from "../download/file.txt"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = "AKWH-Portfolio";
    link.click();
  };

  return (
   
    <section className="h-screen grid md:grid-cols-5 md:grid-rows-1 grid-row-5" id="home">
    <div className="md:col-span-4 row-span-4 flex flex-col justify-center items-start  xl:px-28 sm:px-10 px-4">
      <h1 className="sm:text-8xl text-6xl text-light-gray text-opacity-40 font-ubuntu font-semibold">
        Welcome!
      </h1>
      <h2 className="sm:text-4xl text-3xl font-bold text-light-gray text-opacity-80 mt-10">
        I'M <br />
        Aung Kyaw Wai Htun.
      </h2>
      
      <p className="border-2 w-28  border-btn-color border-solid rounded-lg my-3"></p>

      <p className="sm:text-xl text-lg text-light-gray text-opacity-80 font-extrabold">
        I'm a passionate web developer. <br />I love turning ideas into
        awesome digital stuff that looks great and works even better.
      </p>
      <button className="btn bg-btn-color hover:bg-btn-hover text-light-gray font-bold py-2 px-4 rounded mt-3" onClick={handleDownload}>
        <FontAwesomeIcon icon={faDownload} /> Download CV
      </button>
    </div>
    <div className="md:col-span-1 row-span-1 flex md:flex-col md:justify-center sm:justify-start justify-start items-center  sm:gap-x-3 gap-x-1  gap-y-11 md:px-0 sm:px-10 px-3">
      <p className="md:rotate-90 text-light-gray text-opacity-80 font-ubuntu font-semibold">Follow Me</p>
      <p className="md:rotate-90 border-2 w-14 border-btn-color border-solid rounded-lg md:mt-5"></p>
      <ul className="list-none flex md:flex-col justify-center item-center gap-y-8 sm:gap-x-4 gap-x-1">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100087490458440&mibextid=JRoKGi"
            className="btn bg-btn-color hover:bg-btn-hover text-light-gray font-bold px-4 py-4 rounded-md shadow-sm"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon-large" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/akwhtun"
            className="btn bg-btn-color hover:bg-btn-hover text-light-gray font-bold px-4 py-4 rounded-md shadow-sm"
          >
            <FontAwesomeIcon icon={faGithub} className="icon-large" />
          </a>
        </li>
        <li>
          <a
            href="##"
            className="btn bg-btn-color hover:bg-btn-hover text-light-gray font-bold px-4 py-4 rounded-md shadow-sm"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon-large" />
          </a>
        </li>
      </ul>
    </div>
  </section>
  )
}
