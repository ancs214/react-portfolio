
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/Contact';


function App() {
  //set default value of state to 'false' to prevent contact form from initially showing
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <Router>

      <Header
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          ></Header>
      <main>
       
            <About />
            <Projects />
    
     
          <ContactForm />

      </main>
      <Footer />

    </Router>
  );
}

export default App;
