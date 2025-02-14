import React from 'react';
import Header from './component/Header.jsx';
import Hero from './component/Hero';
import Skills from './component/Skills';
import Projects from './component/Projects.jsx'
// import Projects from './component/Projects';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;