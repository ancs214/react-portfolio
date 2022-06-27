
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>

      <Header />
      <About />
      <Footer />

    </Router>
  );
}

export default App;
