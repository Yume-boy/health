import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';
// import './NavBar2.css';

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className={`sticky-top nav1 ${isScrolled ? 'scrolled-bg' : ''}`}>
      <div className="">
        <header className="d-flex flex-wrap justify-content-center">
          <Link className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ms-5" to="/">
            <img 
              src={logo} 
              width="100" 
              height="100" 
              alt="CarePoint Logo" 
              className={`fusion-standard-logo ${isScrolled ? 'logo-shrink' : ''}`} 
            />
          </Link>
          <div>
            <div>
              {/* Add the conditional class for upward transition and shrinking */}
              {/* // Your JSX remains the same as the previous response. */}
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
                <p className="ms-2 text-center pt-3 fs-5 fw-normal" style={{ minWidth: '400px' }}>19 Paragon Rd, BA1 5LX Bath.</p>
              </div>
            </div>
          <ul className="nav d-flex justify-content-center py-2">
            <li className="nav-item fw-normal">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                className="link nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item fw-normal">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                className="link nav-link"
                to="/services"
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item fw-normal">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                className="link nav-link"
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item fw-normal">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                className="link nav-link"
                to="/workWithUs"
              >
                Work With Us
              </NavLink>
            </li>
            <li className="nav-item fw-normal">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                className="link nav-link"
                to="/training"
              >
                Training
              </NavLink>
            </li>
            <li className="nav-item fw-normal">
              <NavLink
                className="link nav-link"
                style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar2;