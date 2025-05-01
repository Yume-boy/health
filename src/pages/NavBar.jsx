import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' sticky-top'>
  <nav class="navbar navbar-expand-md bg " aria-label="Fourth navbar example">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"><img src="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB_logo_small-1.png" srcset="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB_logo_small-1.png 1x, https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB.png 2x" width="157" height="50" alt="CVBHealthcare Logo" data-retina_logo_url="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB.png" class="fusion-standard-logo" /></Link>
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
