import React, { useState } from 'react';
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from "./components/Skills";

export default function App() {
  
  return (
    <div className={`min-h-screen bg-slate-100 px-5 md:px-10 lg:px-20`}>
      <Header/>
      <Hero />
      <Skills />
      <Services />
      <About />
      <Footer />
    </div>
  )
}