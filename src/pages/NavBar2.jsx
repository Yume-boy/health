import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';


const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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

  return (
    <div className={`sticky-top nav1 ${isScrolled ? 'scrolled-bg' : ''}`}>
      <div>
        <header className="d-flex flex-wrap justify-content-between align-items-center ps-3 pe-3 pe-lg-0">
          {/* Logo */}
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

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex flex-column align-items-center">
            <div className={`d-flex clip flex-column flex-md-row align-items-center ms-md-3 px-5 pb-2 ${isScrolled ? 'clip-up' : ''}`}>
              <button
                type="button"
                className="btn my-2 rounded-pill my-md-0 ms-2 w-100 w-md-auto"
                style={{ borderColor: '#40BACA', color: '#40BACA', whiteSpace: 'nowrap', minWidth: '100px' }}
              >
                Login
              </button>
              <NavLink to="/contact" className="w-100 w-md-auto ms-md-2">
                <button
                  type="button"
                  className="btn rounded-pill text-white my-2 my-md-0 w-100 w-md-auto"
                  style={{ backgroundColor: '#40BACA', whiteSpace: 'nowrap', minWidth: '120px' }}
                >
                  Get Started
                </button>
              </NavLink>
              <p className="ms-2 text-center pt-3 fs-5 fw-normal" style={{ minWidth: '400px' }}>
                19 Paragon Rd, BA1 5LX Bath.
              </p>
            </div>

            <ul className="nav d-flex justify-content-center py-2">
              {["about", "services", "blog", "workWithUs", "training", "contact"].map((item, idx) => (
                <li className="nav-item fw-normal" key={idx}>
                  <NavLink
                    style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                    className="link nav-link"
                    to={`/${item}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Burger Icon (visible only on tablets/mobiles) */}
          <button
            className={`burger d-lg-none ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>

        {/* Mobile Sidebar */}
        <div className={`mobile-menu d-lg-none ${isMenuOpen ? 'show' : ''}`}>
          <ul className="nav flex-column text-center">
            {["about", "services", "blog", "workWithUs", "training", "contact"].map((item, idx) => (
              <li className="nav-item fw-normal my-2" key={idx}>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                  className="link nav-link"
                  to={`/${item}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <button
              type="button"
              className="btn my-2 rounded-pill w-75"
              style={{ borderColor: '#40BACA', color: '#40BACA' }}
            >
              Login
            </button>
            <NavLink to="/contact" className="w-100">
              <button
                type="button"
                className="btn rounded-pill text-white my-2 w-75"
                style={{ backgroundColor: '#40BACA' }}
              >
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
