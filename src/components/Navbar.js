import React, { useState } from 'react';
import logo from '../Home Page Img/LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#626161]">
        <div className="flex flex-wrap items-center justify-between p-2 md:justify-center">
          {/* Flex container for centering logo and button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <img src={logo} className="h-20 mx-auto md:mx-0" alt="Logo" />
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-black-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Navigation menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block text-center md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-green-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#626161] md:bg-[#626161] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/Offer" className="block px-3 py-2 text-white rounded hover:bg-yellow-200 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-yellow-200 md:dark:hover:bg-transparent">OFFER</a>
              </li>
              <li>
                <a href="/Booking" className="block px-3 py-2 text-white rounded hover:bg-yellow-200 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-yellow-200 md:dark:hover:bg-transparent">BOOKING</a>
              </li>
              <li>
                <a href="/About" className="block px-3 py-2 text-white rounded hover:bg-yellow-200 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-yellow-200 md:dark:hover:bg-transparent">ABOUT US</a>
              </li>
              <li>
                <a href="/Contact" className="block px-3 py-2 text-white rounded hover:bg-yellow-200 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-yellow-200 md:dark:hover:bg-transparent">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
