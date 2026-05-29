import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white shadow-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                OPTERWA
              </span>
              <span className="text-base font-bold tracking-wide text-gray-900 uppercase">
                Computing
              </span>
              <span className="text-xs font-medium tracking-widest text-gray-600 uppercase">
                Future
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-sm font-semibold tracking-wide uppercase transition-all duration-300 group ${
                    isActive(link.path)
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                      isActive(link.path)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (desktop) */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>Get Started</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col items-center gap-2 py-6">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-center py-3 text-base font-semibold tracking-wide uppercase transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="w-full pt-4">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md mx-6"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}