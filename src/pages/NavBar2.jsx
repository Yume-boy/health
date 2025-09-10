import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  useEffect(() => {
  const handleScroll = () => {
    // Always shrink logo when scrolled
    setIsScrolled(window.scrollY > 0);

    // Handle clip element
    const clipElement = document.querySelector('.clip');
    if (clipElement) {
      if (window.scrollY > 0) {
        clipElement.classList.add('clip-up');
      } else {
        clipElement.classList.remove('clip-up');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    const toggleMobileDropdown = (e) => {
    e.preventDefault(); // Prevent NavLink from navigating immediately
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <div className={`sticky-top nav1 ${isScrolled ? 'scrolled-bg' : ''}`}>
      <div>
        <header className="d-flex flex-wrap justify-content-between align-items-center ps-3 pe-3 pe-lg-0">
          <Link
            className="navbar-brand d-flex align-items-center mb-0 me-auto text-decoration-none"
            to="/"
          >
            <img
              src={logo}
              width="100"
              height="100"
              alt="CarePoint Logo"
              className={`fusion-standard-logo ${isScrolled ? 'logo-shrink' : ''}`}
            />
          </Link>

          <div className="d-none d-lg-flex flex-column align-items-center">
            <div className={`d-flex clip flex-column flex-md-row align-items-center ms-md-3 px-5 pb-2 ${isScrolled ? 'clip-up' : ''}`}>
              <button type="button" className="btn my-2 rounded-pill my-md-0 ms-2 w-100 w-md-auto" style={{ borderColor: '#40BACA', color: '#40BACA', whiteSpace: 'nowrap', minWidth: '100px' }}>
                Login
              </button>
              <NavLink to="/contact" className="w-100 w-md-auto ms-md-2">
                <button type="button" className="btn rounded-pill text-white my-2 my-md-0 w-100 w-md-auto" style={{ backgroundColor: '#40BACA', whiteSpace: 'nowrap', minWidth: '120px' }}>
                  Get Started
                </button>
              </NavLink>
              <p className="ms-2 text-center pt-3 fs-5 fw-normal" style={{ minWidth: '400px' }}>
                19 Paragon Rd, BA1 5LX Bath.
              </p>
            </div>
            <ul className="nav d-flex justify-content-center py-2">
              {["about", "blog", "workWithUs", "training", "contact"].map((item, idx) => (
                <li className="nav-item fw-normal" key={idx}>
                  <NavLink style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })} className="link nav-link" to={`/${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                  </NavLink>
                </li>
              ))}

              {/* Services dropdown for desktop */}
              <li 
                className="nav-item lampa fw-normal"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                  className="link nav-link position-relative"
                  to="/services"
                >
                  Services ⮟
           
                <div className={`dropdown-menu-desktop position-absolute rounded   ${isDropdownOpen ? 'show' : ''}`}>
                 <NavLink onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMobileDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}  className="nav-link" to="/services/personalHealthAssistance">
                  Personal Health Assistance
                </NavLink>
                <NavLink onClick={() => { setIsMobileDropdownOpen(false); setIsMenuOpen(false); setIsDropdownOpen(!isDropdownOpen) }} className="nav-link" to="/services/mentalHealthSupport">
                  Mental Health Support
                </NavLink>
                <NavLink onClick={() => { setIsMobileDropdownOpen(false); setIsMenuOpen(false); setIsDropdownOpen(!isDropdownOpen) }} className="nav-link" to="/services/elderlyDisabilityCare">
                  Elderly & Disability Care
                </NavLink>
                <NavLink onClick={() => { setIsMobileDropdownOpen(false); setIsMenuOpen(false); setIsDropdownOpen(!isDropdownOpen) }} className="nav-link" to="/services/careSupportStaffing">
                  Home Care & Care Home Staffing
                </NavLink>
                </div>
                </NavLink>
              </li>
            </ul>
          </div>
          <button className={`burger d-lg-none ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>

        {/* Mobile Sidebar */}
        <div className={`mobile-menu d-lg-none ${isMenuOpen ? 'show' : ''}`}>
          <ul className="nav flex-column ">
            {["about", "blog", "workWithUs", "training", "contact"].map((item, idx) => (
              <li className="nav-item fw-normal my-2" key={idx}>
                <NavLink onClick={() => setIsMenuOpen(false)} style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })} className="link nav-link" to={`/${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                </NavLink>
              </li>
            ))}
            <li className="nav-item fw-normal my-2 mobile-dropdown-container">
              <div onClick={toggleMobileDropdown} style={{ cursor: 'pointer' }}>
                {/* <NavLink style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })} className="link nav-link" to=""> */}
                  Services ⮟
                {/* </NavLink> */}
              </div>
              <div className={`dropdown-mobile text-left ${isMobileDropdownOpen ? 'show-dropdown' : ''}`}>
                <NavLink onClick={() => { setIsMobileDropdownOpen(false); setIsMenuOpen(false); }} className="nav-link" to="/services/personalHealthAssistance">
                  Personal Health Assistance
                </NavLink>
                <NavLink onClick={() => { setIsMobileDropdownOpen(false); setIsMenuOpen(false); }} className="nav-link" to="/services/mentalHealthSupport">
                  Mental Health Support
                </NavLink>
                <NavLink onClick={() => { setIsMobileDropdownOpen(false); setIsMenuOpen(false); }} className="nav-link" to="/services/elderlyDisabilityCare">
                  Elderly & Disability Care
                </NavLink>
                <NavLink onClick={() => { setIsMobileDropdownOpen(false); setIsMenuOpen(false); }} className="nav-link" to="/services/careSupportStaffing">
                  Home Care & Care Home Staffing
                </NavLink>
              </div>
            </li>
          </ul>
          <div className="mt-3">
            <button type="button" className="btn my-2 rounded-pill w-75" style={{ borderColor: '#40BACA', color: '#40BACA' }}>
              Login
            </button>
            <NavLink to="/contact" className="w-100">
              <button type="button" className="btn rounded-pill text-white my-2 w-75" style={{ backgroundColor: '#40BACA' }}>
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;