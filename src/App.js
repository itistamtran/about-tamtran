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
    Router,
    { basename: '/about-tamtran' }, // Adjust this basename to match your GitHub Pages subpath
    React.createElement(
      'div',
      { className: 'flex min-h-screen' },
      React.createElement(Sidebar),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/', element: React.createElement(About) }),
        React.createElement(Route, { path: '/resume', element: React.createElement(Resume) }),
        React.createElement(Route, { path: '/projects', element: React.createElement(Projects) }),
        React.createElement(Route, { path: '/contact', element: React.createElement(Contact) }),
        React.createElement(Route, { path: '/onsale', element: React.createElement(OnSale) })
      )
    )
  );
};

export default App;
