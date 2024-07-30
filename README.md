import React, { useState } from 'react';
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from "./components/Skills";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`min-h-screen bg-white px-5 md:px-10 lg:px-20 ${isDarkMode ? 'bg-gray-900' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode}/>
      <Hero />
      <Skills />
      <Services />
      <About />
      <Footer />
    </div>
  )
}


import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Header({toggleDarkMode}) {



  return (
       <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons">Ambition</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-xl" onClick={toggleDarkMode}/>
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}



