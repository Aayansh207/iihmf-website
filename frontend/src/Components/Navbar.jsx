import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "./Assets/logo_tbi.png";
import DST_NIDHI from "./Assets/DST_NIDHI.png";
import DST_LOGO from "./Assets/dst_logo.png";
import START_IN_UP from "./Assets/startinup.png";
import MNNIT_LOGO from "./Assets/mnnit_logo.jpeg";

const aboutLinks = [
  { name: "Who We Are", path: "/about" },
  { name: "Board of Directors", path: "/board" },
  { name: "Team", path: "/team" },
  { name: "Collaboration", path: "/collaboration" },
  { name: "Mentors", path: "/mentors" },
  { name: "Facilities", path: "/facilities" },
  { name: "Events", path: "/events" },
  { name: "Awards", path: "/awards" },
];

const policyLinks = [
  { name: "Startups / Incubation Policy", path: "/policies/incubation" },
  { name: "Leave Policy", path: "/policies/leave" },
  { name: "Attendance Policy", path: "/policies/attendance" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobilePolicy, setMobilePolicy] = useState(false);
  const location = useLocation();
  const aboutRef = useRef(null);
  const policyRef = useRef(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setPolicyOpen(false);
  }, [location]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
      if (policyRef.current && !policyRef.current.contains(e.target)) setPolicyOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isAboutActive = aboutLinks.some((l) => isActive(l.path));
  const isPolicyActive = policyLinks.some((l) => isActive(l.path));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img src={logo} alt="IIHMF Logo" className="h-10 lg:h-12 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-sm lg:text-base font-bold text-primary-500 leading-tight font-display">
                  Innovation & Incubation Hub
                </h1>
                <p className="text-[10px] lg:text-xs text-gray-500 leading-tight">
                  MNNIT Foundation
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* About Dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => { setAboutOpen(!aboutOpen); setPolicyOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isAboutActive
                      ? "text-accent-500 bg-accent-50"
                      : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                  }`}
                >
                  About
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(link.path)
                            ? "text-accent-500 bg-accent-50 font-medium"
                            : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Policies Dropdown */}
              <div className="relative" ref={policyRef}>
                <button
                  onClick={() => { setPolicyOpen(!policyOpen); setAboutOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isPolicyActive
                      ? "text-accent-500 bg-accent-50"
                      : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                  }`}
                >
                  Our Policies
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${policyOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {policyOpen && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                    {policyLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(link.path)
                            ? "text-accent-500 bg-accent-50 font-medium"
                            : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Mentors */}
              <Link
                to="/mentors"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive("/mentors")
                    ? "text-accent-500 bg-accent-50"
                    : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                }`}
              >
                Our Mentors
              </Link>

              {/* Apply for Incubation */}
              <Link
                to="/apply-incubation"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive("/apply-incubation")
                    ? "text-accent-500 bg-accent-50"
                    : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                }`}
              >
                Apply for Incubation
              </Link>

              {/* Training & Internships - Highlighted */}
              <Link
                to="/training"
                className="relative px-4 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 animate-pulse-glow"
              >
                Training & Internships
              </Link>

              {/* Portfolio */}
              <Link
                to="/portfolio"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive("/portfolio")
                    ? "text-accent-500 bg-accent-50"
                    : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                }`}
              >
                Portfolio
              </Link>
            </div>

            {/* Partner Logos - Desktop */}
            <div className="hidden xl:flex items-center gap-2">
              {[MNNIT_LOGO, DST_NIDHI, START_IN_UP, DST_LOGO].map((src, i) => (
                <img key={i} src={src} alt="" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {/* About Accordion */}
            <div>
              <button
                onClick={() => setMobileAbout(!mobileAbout)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                About
                <FiChevronDown className={`w-4 h-4 transition-transform ${mobileAbout ? "rotate-180" : ""}`} />
              </button>
              {mobileAbout && (
                <div className="ml-4 space-y-1 animate-fade-in">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-3 py-2 text-sm rounded-lg ${
                        isActive(link.path) ? "text-accent-500 bg-accent-50" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Policies Accordion */}
            <div>
              <button
                onClick={() => setMobilePolicy(!mobilePolicy)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Our Policies
                <FiChevronDown className={`w-4 h-4 transition-transform ${mobilePolicy ? "rotate-180" : ""}`} />
              </button>
              {mobilePolicy && (
                <div className="ml-4 space-y-1 animate-fade-in">
                  {policyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-3 py-2 text-sm rounded-lg ${
                        isActive(link.path) ? "text-accent-500 bg-accent-50" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/mentors" className="block px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
              Our Mentors
            </Link>
            <Link to="/apply-incubation" className="block px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
              Apply for Incubation
            </Link>
            <Link to="/training" className="block px-3 py-3 text-sm font-bold text-accent-500 rounded-lg bg-accent-50">
              Training & Internships
            </Link>
            <Link to="/portfolio" className="block px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
              Portfolio
            </Link>

            {/* Partner logos mobile */}
            <div className="flex items-center gap-3 pt-4 px-3 border-t border-gray-100">
              {[MNNIT_LOGO, DST_NIDHI, START_IN_UP, DST_LOGO].map((src, i) => (
                <img key={i} src={src} alt="" className="h-7 w-auto opacity-70" />
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;
