import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import About from './containers/about';
import Resume from './containers/resume';
import Projects from './containers/projects';
import Contact from './containers/contact';
import OnSale from './containers/onsale';
const App = () => {
  return React.createElement(
    'div',
    { className: 'flex min-h-screen' },
    React.createElement(Sidebar),
    React.createElement(About)
    //React.createElement(Resume)
    //React.createElement(Projects)
    //React.createElement(Contact)
    //React.createElement(OnSale)

  );
};

export default App;
