import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' sticky-top'>
      {/* <div>
      <img src="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB_logo_small-1.png" srcset="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB_logo_small-1.png 1x, https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB.png 2x" width="157" height="50" alt="CVBHealthcare Logo" data-retina_logo_url="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB.png" class="fusion-standard-logo" />
      </div>
      <div>
        <ul>
          <li>
            <NavLink
            className='link'
            >
            HOME
            </NavLink>
          </li>
          <li>
            <NavLink
            className='link'
            >
            ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
            className='link'
            >
            CLIENT
            </NavLink>
          </li>
          <li>
            <NavLink
            className='link'
            >
            NURSES
            </NavLink>
          </li>
          <li>
           <NavLink
            className='link'
            >
            HCA
            </NavLink>
          </li>
          <li>
            <NavLink
            className='link'
            >
            WORK WITH US
            </NavLink>
          </li>
          <li>
            <NavLink
            className='link'
            >
            TRAINING
            </NavLink>
          </li>
          <li>
            <NavLink
            className='link'
            >
            CONTACT
            </NavLink>
          </li>
        </ul>
      </div> */}

{/* <nav class="navbar navbar-expand-lg bg" aria-label="Offcanvas navbar large">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB_logo_small-1.png" srcset="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB_logo_small-1.png 1x, https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB.png 2x" width="157" height="50" alt="CVBHealthcare Logo" data-retina_logo_url="https://cvbhealthcare.co.uk/wp-content/uploads/2019/12/CVB.png" class="fusion-standard-logo" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 space pe-3">
            <li class="nav-item">
            <NavLink
            className='link'
            >
            HOME
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link'
            >
            ABOUT
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link'
            >
            TRAINING
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link'
            >
            CLIENTS
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link'
            >
            NURSES
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link'
            >
            HCA
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
            className='link'
            >
            WORK WITH US
            </NavLink>
            </li><li class="nav-item">
            <NavLink
            className='link'
            >
            TRAINING
            </NavLink>
            </li>
            <li class="nav-item dropdown">
            <NavLink
            className='link'
            >
            CONTACT
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav> */}

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
            >
            Contact
            </NavLink>
            </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <div className=''>
          <button type="button" class="btn mx-3" style={{borderColor: '#40BACA', color:'#40BACA'}}>Login</button>
          <button type="button" class="btn text-white" style={{backgroundColor: '#40BACA'}}>Get Started</button>
        </div>

      </div>
    </div>
  </nav>
    </div>
  )
}

export default NavBar
