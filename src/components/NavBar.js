import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <div className="max-width">
        <div className="logo">
          <NavLink to="/">My<span>Web</span></NavLink>
        </div>
        <button id="themeToggle" onClick={toggleTheme}>🌓</button>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'menu-btn active' : 'menu-btn'}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'menu-btn active' : 'menu-btn'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => isActive ? 'menu-btn active' : 'menu-btn'}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) => isActive ? 'menu-btn active' : 'menu-btn'}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) => isActive ? 'menu-btn active' : 'menu-btn'}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => isActive ? 'menu-btn active' : 'menu-btn'}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'menu-btn active' : 'menu-btn'}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className="material-icons">menu</i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
