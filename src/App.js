import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import About from './containers/about';
// Other imports as necessary

function App() {
  console.log("App component is rendering");

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 text-white bg-black">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
            <Route path="/ecommerce" element={<h1>E-Commerce Page</h1>} />
            <Route path="/inbox" element={<h1>Inbox Page</h1>} />
            <Route path="/profile" element={<h1>Profile Page</h1>} />
            <Route path="/settings" element={<h1>Settings Page</h1>} />
            <Route path="/logout" element={<h1>Log Out Page</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
