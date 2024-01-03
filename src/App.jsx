import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arrow from "./components/Arrow";

const App = () => {
  return (
    <div className="font-nunito font-extrabold leading-normal tracking-normal">
      <Navbar />
      <Home />
      <About />
      <SkillsList />
      <ProjectsList />
      <Contact />
      <Footer />
      <Arrow />
    </div>
  );
}

export default App;
