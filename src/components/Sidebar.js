import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  console.log(new URL('about-tamtran/assets/images/avatar.png', document.baseURI).href); // This will log the absolute URL to the console

  const [setActiveLink] = useState('');
  
  const handleMouseEnter = linkName => setActiveLink(linkName);
  const handleMouseLeave = () => setActiveLink('');

  const links = [
    { name: 'About', path: '/' },
    { name: 'My Resume', path: '/my-resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'ForSale', path: '/onsale' }
  ];

  return React.createElement(

    'div',
    {
      className: 'w-64 h-screen bg-black text-white flex flex-col justify-between p-5' // Ensures proper spacing
    },
    React.createElement(
      'div', // Avatar container
      {
        className: 'flex justify-center items-center p-5' // Removed border to eliminate the line below the avatar
      },
      React.createElement(
        'img',
        {
          src: process.env.PUBLIC_URL + '/assets/images/avatar.png', // Absolute path from public folder
          alt: 'Avatar',
          className: 'w-25 h-25' // Avatar styling
        }
      ),
      
    ),
    React.createElement(
      'div', // Wrapper for navigation links
      { className: 'flex flex-col justify-top h-full space-y-6 pt-10' },
      links.map(link =>
        React.createElement(
          'div',
          { key: link.name },
          React.createElement(
            Link,
            {
              to: link.path,
              className: 'block text-center text-xl hover:text-green-400',
              onMouseEnter: () => handleMouseEnter(link.name),
              onMouseLeave: handleMouseLeave
            },
            link.name
          ),
          React.createElement('hr', { className: 'mt-2 border-gray-700' })
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'flex justify-center items-center space-x-6 mt-4 p-5' }, // Positions icons at the bottom
      React.createElement(
        'a',
        {
          href: 'https://www.linkedin.com/in/tamtran-/',
          className: 'text-white hover:text-green-400 transition duration-300'
        },
        React.createElement(FaLinkedin, { className: 'h-6 w-6' }) // LinkedIn icon
      ),
      React.createElement(
        'a',
        {
          href: 'https://github.com/itistamtran',
          className: 'text-white hover:text-green-400 transition duration-300'
        },
        React.createElement(FaGithub, { className: 'h-6 w-6' }) // GitHub icon
      )
    ),
    React.createElement(
      'div', 
      { className: 'text-sm text-gray-300 text-center mt-2' },
      React.createElement(
        'p',
        null,
        '© 2025 Tam Tran.'
      ),
      React.createElement(
        'p',
        null,
        'All rights reserved.'
      )
    )  
  );
};

export default Sidebar;
