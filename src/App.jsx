import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-darker-grayish-blue font-sans leading-normal tracking-normal">
      <Navbar />
      <section className="h-screen bg-darker-grayish-blue grid md:grid-cols-5 md:grid-rows-1 grid-row-5">
        <div className="md:col-span-4 row-span-4 flex flex-col justify-center items-start  xl:px-28 sm:px-10 px-4">
          <h1 className="text-8xl text-light-gray text-opacity-40 font-open-sans font-semibold">
            Welcome!
          </h1>
          <h2 className="text-4xl font-bold  mt-10">
            I'M <br />
            Aung Kyaw Wai Htun.
          </h2>

          <p class="border-2 w-28  border-light-gray border-solid rounded-lg my-3"></p>

          <p className="text-lg font-semibold">
            I'm a passionate web developer. <br />I love turning ideas into
            awesome digital stuff that looks great and works even better.
          </p>
          <button class="btn bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold py-2 px-4 rounded mt-3">
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </button>
        </div>
        <div className="md:col-span-1 row-span-1 flex md:flex-col md:justify-center sm:justify-start justify-center items-center  gap-x-3  gap-y-11 md:px-0 sm:px-10">
          <p className="md:rotate-90 font-open-sans font-semibold">Follow Me</p>
          <p class="md:rotate-90 border-2 w-14 border-light-gray border-solid rounded-lg md:mt-5"></p>
          <ul className="list-none flex md:flex-col justify-center item-center gap-y-8 gap-x-4">
            <li>
              <a href="#" className="btn bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold px-4 py-4">
                <FontAwesomeIcon icon={faFacebook} className="icon-large" />
              </a>
            </li>
            <li>
              <a href="#" className="btn bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold px-4 py-4">
                <FontAwesomeIcon icon={faGithub} className="icon-large"/>
              </a>
            </li>
            <li>
              <a href="#" className="btn bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold px-4 py-4">
                <FontAwesomeIcon icon={faTelegram} className="icon-large"/>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <form action="https://formspree.io/f/xeqyjnpb" method="POST" className="w-full max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
        
          placeholder="Your name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
         
          placeholder="Your email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
        
          placeholder="Your message"
          rows="4"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>

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
      </section>

      <footer class="bg-gray-200 text-gray-700 py-4 text-center">
        <p>&copy; 2023 Your Name. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
