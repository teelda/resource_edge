import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/HomePage/Home';
import About from './Components/Pages/About/About';
import Features from './Components/Pages/Features/Features';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <About />
      <Features />
      <Footer />
    </Router>
  )
}

export default App
