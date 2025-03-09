import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Consolidate imports
import Sidebar from './components/Sidebar';
import Projects from './containers/projects';
import Contact from './containers/contact';
import OnSale from './containers/onsale';
import Resume from './containers/resume'; 
import CPPLibrary from './containers/projects/CPPlibrary';
import OperationsResearch from './containers/projects/OperationsResearch';
import BrainTumorDetected from './containers/projects/BrainTumorDetected';

import './App.css';

// Define the About component
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 p-6 text-white sm:p-8 md:p-10 bg-dark-gray">
      <h1 className="mt-10 text-5xl font-bold sm:text-7xl md:text-9xl">Hi,</h1>
      <h1 className="mt-3 text-5xl font-bold sm:text-7xl md:text-9xl">I'm Tam</h1>
      <h2 className="mt-3 text-base font-semibold sm:text-lg md:text-xl">
        computer science | data science | mathematics
      </h2>
      <button
        className="px-3 py-1 mt-6 text-sm font-bold text-green-400 transition duration-300 border border-green-400 sm:mt-8 md:mt-20 sm:px-4 md:px-6 sm:py-2 md:py-3 sm:text-base md:text-lg hover:bg-green-400 hover:text-black"
        onClick={() => navigate('/contact')}
      >
        Contact me!
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/about-tamtran">
      <div className="flex min-h-screen bg-dark-gray"> {/* Apply consistent background */}
        <Routes>
          <Route path="/" element={<div className="flex flex-1"><Sidebar /><About /></div>}/>
          <Route path="/my-resume" element={<div className="flex flex-1"><Resume /></div>}/>
          <Route path="/projects" element={<div className="flex flex-1"><Sidebar /><Projects /></div>}/>
          <Route path="/contact" element={<div className="flex flex-1"><Sidebar /><Contact /></div>}/>
          <Route path="/onsale" element={<div className="flex flex-1"><Sidebar /><OnSale /></div>}/>
          <Route path="/projects/CPPLibrary" element={<CPPLibrary />} /> {/* Add CPPLibrary route */}
          <Route path="/projects/OperationsResearch" element={<OperationsResearch />} /> {/* Add OperationsResearch route */}
          <Route path="/projects/BrainTumorDetected" element={<BrainTumorDetected />} /> {/* BrainTumorDetected */}

        </Routes>
      </div>
    </Router>
  );
};


export default App;
