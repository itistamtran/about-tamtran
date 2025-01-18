import React from 'react';

export default function About() {
  return React.createElement(
    'div',
    { className: 'flex-1 p-6 sm:p-8 md:p-10 text-white bg-neutral-900' }, // Responsive padding
    React.createElement(
      'h1',
      { className: 'font-bold text-5xl sm:text-7xl md:text-9xl mt-10' }, 
      'Hi,'
    ),
    React.createElement(
      'h1',
      { className: 'font-bold text-5xl sm:text-7xl md:text-9xl mt-3' }, 
      "I'm Tam"
    ),
    React.createElement(
      'h2',
      {
        className: 'mt-3 text-base sm:text-lg md:text-xl font-semibold', // Responsive subtitle
      },
      'computer science | data science | mathematics'
    ),
    React.createElement(
      'button',
      {
        className:
          'mt-6 sm:mt-8 md:mt-20 px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 text-sm sm:text-base md:text-lg text-green-400 font-bold bg-black border border-green-400 hover:bg-green-400 hover:text-black transition duration-300', // Responsive button
        onClick: () => alert('Contact me clicked!'),
      },
      'Contact me!'
    )
  );
}
