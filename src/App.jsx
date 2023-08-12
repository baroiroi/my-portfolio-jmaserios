import React from "react";
import About from "./components/About";
import Splash from "./components/Splash";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
    <NavBar />
    <Splash />
    <About />
    <Skills />
    <Experiences />
    <Projects />
    <Contacts />
    
    <Footer />
    </>
  );
};

export default App;
