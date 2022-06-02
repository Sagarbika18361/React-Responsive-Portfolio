// import logo from './logo.svg';

import React from 'react';
import Navbar from '../src/Components/Navbar.js';
import './App.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Components/Portfolio.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
  <>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    <Routes>
      <Route path="/home" element={<Home />} />     
    </Routes>
  </>
  );
}

export default App;
