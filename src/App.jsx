import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arrow from "./components/Arrow";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="font-extrabold leading-normal tracking-normal app">
      {loading ? (
        <div className="load">
          <div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
          </div>

          <div className="loading-text plus-jakarta-sans">
            <span>A</span>
            <span>K</span>
            <span>W</span>
            <span>H</span>
          </div>
        </div>

      ) : (
        <>
          <Navbar />
          <Home />
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
