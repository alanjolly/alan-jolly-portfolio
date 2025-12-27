import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

import ScrollTopology from './components/ScrollTopology'
import NetworkBackground from './components/NetworkBackground';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <NetworkBackground /> */}
        <ScrollTopology />
        <main>
          {/* <h1 style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>System Check: App is Mounting</h1> */}
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Philosophy />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
