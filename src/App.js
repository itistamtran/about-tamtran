import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Projects from './containers/projects';
import Contact from './containers/contact';
import OnSale from './containers/onsale';
import Resume from './containers/resume'; 
import './App.css';

// Define the About component
const About = () => {
  return (
    <div className="flex-1 p-6 sm:p-8 md:p-10 text-white bg-dark-gray">
      <h1 className="font-bold text-5xl sm:text-7xl md:text-9xl mt-10">Hi,</h1>
      <h1 className="font-bold text-5xl sm:text-7xl md:text-9xl mt-3">I'm Tam</h1>
      <h2 className="mt-3 text-base sm:text-lg md:text-xl font-semibold">
        computer science | data science | mathematics
      </h2>
      <button
        className="mt-6 sm:mt-8 md:mt-20 px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 text-sm sm:text-base md:text-lg text-green-400 font-bold bg-black border border-green-400 hover:bg-green-400 hover:text-black transition duration-300"
        onClick={() => alert('Contact me clicked!')}
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
          <Route
            path="/"
            element={
              <div className="flex flex-1">
                <Sidebar />
                <About />
              </div>
            }
          />
          <Route
            path="/my-resume"
            element={
              <div className="flex flex-1">
                <Resume />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="flex flex-1">
                <Sidebar />
                <Projects />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="flex flex-1">
                <Sidebar />
                <Contact />
              </div>
            }
          />
          <Route
            path="/onsale"
            element={
              <div className="flex flex-1">
                <Sidebar />
                <OnSale />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
