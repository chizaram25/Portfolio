import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Common link styles
  const baseClasses = "transition-colors hover:text-yellow-300";

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <NavLink to="/" className="text-2xl font-bold text-yellow-300" onClick={closeMenu}>
          ZHEECODES
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? "text-yellow-300 font-semibold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? "text-yellow-300 font-semibold" : ""}`
            }
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? "text-yellow-300 font-semibold" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? "text-yellow-300 font-semibold" : ""}`
            }
          >
            Resume
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? "text-yellow-300 font-semibold" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? "text-yellow-300 font-semibold" : ""}`
              }
              onClick={closeMenu}
            >
              Project
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? "text-yellow-300 font-semibold" : ""}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? "text-yellow-300 font-semibold" : ""}`
              }
              onClick={closeMenu}
            >
              Resume
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
