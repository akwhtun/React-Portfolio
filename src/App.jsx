import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="font-nunito font-extrabold leading-normal tracking-normal">
      <Navbar />
      <section className="h-screen grid md:grid-cols-5 md:grid-rows-1 grid-row-5">
        <div className="md:col-span-4 row-span-4 flex flex-col justify-center items-start  xl:px-28 sm:px-10 px-4">
          <h1 className="text-8xl text-light-gray text-opacity-40 font-ubuntu font-semibold">
            Welcome!
          </h1>
          <h2 className="text-4xl font-bold text-light-gray text-opacity-80 mt-10">
            I'M <br />
            Aung Kyaw Wai Htun.
          </h2>

          <p className="border-2 w-28  border-black border-solid rounded-lg my-3"></p>

          <p className="text-xl text-light-gray text-opacity-80 font-extrabold">
            I'm a passionate web developer. <br />I love turning ideas into
            awesome digital stuff that looks great and works even better.
          </p>
          <button className="btn bg-btn-color hover:bg-btn-hover text-light-gray font-bold py-2 px-4 rounded mt-3">
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </button>
        </div>
        <div className="md:col-span-1 row-span-1 flex md:flex-col md:justify-center sm:justify-start justify-center items-center  gap-x-3  gap-y-11 md:px-0 sm:px-10">
          <p className="md:rotate-90 text-light-gray text-opacity-80 font-ubuntu font-semibold">Follow Me</p>
          <p class="md:rotate-90 border-2 w-14 border-black border-solid rounded-lg md:mt-5"></p>
          <ul className="list-none flex md:flex-col justify-center item-center gap-y-8 gap-x-4">
            <li>
              <a
                href="https://github.com/akwhtun"
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
                href="https://github.com/akwhtun"
                className="btn bg-btn-color hover:bg-btn-hover text-light-gray font-bold px-4 py-4 rounded-md shadow-sm"
              >
                <FontAwesomeIcon icon={faTelegram} className="icon-large" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <SkillsList/>
      <Contact />
      <ProjectsList />
      {/* <section class="bg-white py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-gray-800">Portfolio</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gray-200 p-4 rounded-md shadow-md">
              <h3 class="text-xl font-semibold mb-2">Project Title</h3>
              <p>Description of the project goes here.</p>
              <a href="#" class="block mt-2 text-blue-500 hover:underline">
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">     
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
          <p class="text-gray-600">
            Brief introduction or summary about yourself, your skills, and
            experiences.
          </p>
        </div>
      </section>

      <section class="bg-gray-800 text-white py-16">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Contact Me</h2>
          <p class="text-gray-300">
            Reach out for collaborations, projects, or just to say hi!
          </p>
        </div>
      </section> */}

    
      <footer class="bg-background-color text-light-gray text-opacity-90 py-4 text-center">
        <p>&copy; 2023 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
