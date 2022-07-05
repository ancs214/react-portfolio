
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route 
            path='/react-portfolio/'
            element={<About />}
          />
          <Route 
            path='/projects'
            element={ <Projects />}
          />
          <Route 
            path='/contact'
            element={<ContactForm />}
          />
          <Route 
            path='/resume'
            element={<Resume />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
