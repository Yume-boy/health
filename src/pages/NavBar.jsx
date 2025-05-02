import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.jpg'

const NavBar = () => {
  return (
    <div className=' sticky-top'>
  <nav class="navbar navbar-expand-md bg " aria-label="Fourth navbar example">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"><img src={logo}  width="70" height="70" alt="CarePoint Logo"  class="fusion-standard-logo" /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0  space">
        
            <li class="nav-item">
            <NavLink
            className='link nav-link'
            to={'/about'}
            >
            About
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link nav-link'
            to={'/services'}
            >
            Service
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link nav-link'
            to={'/team'}
            >
            Team
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link nav-link'
            to={'/contact'}
            >
            Contact
            </NavLink>
            </li>
          
        </ul>
        <button type="button" class="btn mx-3" style={{borderColor: '#40BACA', color:'#40BACA'}}>Login</button>
        <button type="button" class="btn text-white" style={{backgroundColor: '#40BACA'}}>Get Started</button>

      </div>
    </div>
  </nav>
    </div>
  )
}

export default NavBar
