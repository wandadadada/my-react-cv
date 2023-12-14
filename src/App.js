import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">

        <div className="right-column">
          <p>--------------------------------------------------------------------------------------------------------</p>
          <Education />
          <p>--------------------------------------------------------------------------------------------------------</p>
          <Skills />
          <p>--------------------------------------------------------------------------------------------------------</p>

          <Projects />
          <p>--------------------------------------------------------------------------------------------------------</p>

          <Experience />
          <p>--------------------------------------------------------------------------------------------------------</p>

          <Certifications />
          <Footer />
        </div></div>
    </div>
  );
}

export default App;
