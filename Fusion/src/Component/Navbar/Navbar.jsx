import React, { useState } from "react";
import logo from "/logo1.png"; // Ensure the correct path to your logo file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Bites & Fusion Logo"
            className="h-14 w-auto" // Adjust height for the logo
          />
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="/juices"
            className="text-black hover:text-orange-500 font-medium"
          >
            Juices
          </a>
          <a
            href="/healthy-kids"
            className="text-black hover:text-orange-500 font-medium"
          >
            Healthy Kids
          </a>
          <a
            href="/smoothies"
            className="text-black hover:text-orange-500 font-medium"
          >
            Smoothies
          </a>
          <a
            href="/bowl"
            className="text-black hover:text-orange-500 font-medium"
          >
            Special Bowl
          </a>
       
        </nav>

        {/* Contact Info for Desktop */}
        <div className="hidden md:flex items-center text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-orange-500 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M3 2a1 1 0 011-1h4a1 1 0 011 .76l1 4a1 1 0 01-.24.92l-2 2a12.03 12.03 0 005.29 5.29l2-2a1 1 0 01.92-.24l4 1a1 1 0 01.76 1v4a1 1 0 01-1 1h-1a16.03 16.03 0 01-16-16V3a1 1 0 011-1z"
            />
          </svg>
          +91 79722 39800
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 w-64`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-700 text-2xl"
        >
          &times; {/* Close Icon */}
        </button>
        <nav className="flex flex-col space-y-4 mt-12 px-6">
          <a
            href="/juices"
            className="text-black hover:text-orange-500 text-lg font-medium"
          >
            Juices
          </a>
          <a
            href="/healthy-kids"
            className="text-black hover:text-orange-500 text-lg font-medium"
          >
            Healthy Kids
          </a>
          <a
            href="/smoothies"
            className="text-black hover:text-orange-500 text-lg font-medium"
          >
            Smoothies
          </a>
          <a
            href="/bowl"
            className="text-black hover:text-orange-500 text-lg font-medium"
          >
            Special Bowl
          </a>
          </nav>
      </div>
    </header>
  );
};

export default Navbar;
