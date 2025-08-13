import React from "react";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import SliderSkill from "./Components/SliderSkill/SliderSkill";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import HireMe from "./Components/HireMe/HireMe";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />

      
        <section id="home">
          <Hero />
        </section>

       

          <SliderSkill />


       
        <section id="about">
          <About />
        </section>

        
        <section id="projects">
          <Projects />
        </section>

        
        <section id="skills">
          <Skills />
        </section>

        
        <section id="hireme">
          <HireMe />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
