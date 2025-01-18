import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleMouseEnter = linkName => setActiveLink(linkName);
  const handleMouseLeave = () => setActiveLink('');

  const links = ['About', 'My Resume', 'Projects', 'Contact', 'Blog'];

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
          src: '/assets/images/avatar.png', // Absolute path from public folder
          alt: 'Avatar',
          className: 'w-25 h-25' // Avatar styling
        }
      )
    ),
    React.createElement(
      'div', // Wrapper for navigation links
      { className: 'flex flex-col justify-top h-full space-y-3 pt-8' }, // Adjusted spacing for uniformity
      links.map((link, index) =>
        React.createElement(
          'div', // Container div for link and underline
          { key: link },
          index === 0 // Add an extra line above "About"
            ? React.createElement('hr', { className: 'w-full border-gray-700 mb-3' }) // Extra line above "About"
            : null,
          React.createElement(
            'a',
            {
              href: `#${link.toLowerCase().replace(/\s+/g, '-')}`,
              className: 'block text-center text-xl hover:text-green-400 transition duration-300' // Centers text horizontally
            },
            link
          ),
          React.createElement('hr', { className: 'mt-3 border-gray-700' }) // Line below each link
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
    )
  );
};

export default Sidebar;
