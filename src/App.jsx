import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="font-nunito font-extrabold leading-normal tracking-normal app">
      {loading ? (
        <div className="load">
       <div className="loader">
       <div className="inner one"></div>
       <div className="inner two"></div>
       <div className="inner three"></div>
     </div>
     <div className="text-container"></div>
     </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <SkillsList />
          <ProjectsList />
          <Contact />
          <Footer />
          <Arrow />
        </>
      )}
    </div>
  );
};

export default App;
