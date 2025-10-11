import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-2xl font-bold text-yellow-300">
          ZHEECODES
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/project" className="hover:text-yellow-300 transition-colors">Project</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link>
          <Link to="/resume" className="hover:text-yellow-300 transition-colors">Resume</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-6 pb-4">
          <div className="flex flex-col space-y-4 text-lg">
            <Link to="/" className="hover:text-yellow-300" onClick={closeMenu}>Home</Link>
            <Link to="/project" className="hover:text-yellow-300" onClick={closeMenu}>Project</Link>
            <Link to="/about" className="hover:text-yellow-300" onClick={closeMenu}>About</Link>
            <Link to="/resume" className="hover:text-yellow-300" onClick={closeMenu}>Resume</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
