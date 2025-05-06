import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.jpg'

const NavBar = () => {

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Define init function globally
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-md bg" aria-label="Fourth navbar example">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="70" height="70" alt="CarePoint Logo" className="fusion-standard-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
          <div id="google_translate_element py-5"></div>
            {/* Center the links */}
            <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-4 ">
              <li className="nav-item fw-normal">
                <NavLink 
                  style={({ isActive }) => ({
                    color: isActive ? '#40BACA' : 'white',
                  })}
                className="link nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item fw-normal">
                <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#40BACA' : 'white',
                })}
                className="link nav-link" to="/services">
                  Service
                </NavLink>
              </li>
              <li className="nav-item fw-normal">
                <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#40BACA' : 'white',
                })}
                className="link nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item fw-normal">
                <NavLink 
                style={({ isActive }) => ({
                  color: isActive ? '#40BACA' : 'white',
                })}
                className="link nav-link" to="/workWithUs">
                  Work With Us
                </NavLink>
              </li>
              <li className="nav-item fw-normal">
                <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#40BACA' : 'white',
                })}
                 className="link nav-link" to="/training">
                  Training
                </NavLink>
              </li>
              <li className="nav-item fw-normal">
                <NavLink className="link nav-link"
                style={({ isActive }) => ({
                  color: isActive ? '#40BACA' : 'white',
                })}
                to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Right-side buttons */}
            <div className="d-flex flex-column flex-md-row align-items-center ms-md-3" style={{ minWidth: '220px' }}>
              <button
                type="button"
                className="btn my-2 my-md-0 w-100 w-md-auto"
                style={{ borderColor: '#40BACA', color: '#40BACA', whiteSpace: 'nowrap', minWidth: '100px' }}
              >
                Login
              </button>
              <NavLink to="/contact" className="w-100 w-md-auto ms-md-2">
                <button
                  type="button"
                  className="btn text-white my-2 my-md-0 w-100 w-md-auto"
                  style={{ backgroundColor: '#40BACA', whiteSpace: 'nowrap', minWidth: '120px',}}
                >
                  Get Started
                </button>
              </NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
