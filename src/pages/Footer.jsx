import React from 'react'
import { MapPin, Phone, Mail, CircleArrowRight, } from 'lucide-react';
import logo from './logo.jpg'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <section className='footer px-5'>
     <footer class="row  py-5  border-top">
    <div class="col-12 col-sm-4 mb-3">
      <NavLink to="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
       <img src={logo}/>
      </NavLink>
      <p class="text-body-secondary">We are a trusted agency supplying qualified healthcare staff to care homes, hospitals, and other establishments. We also provide personalized domiciliary care, supporting private individuals with compassionate, professional care right at home.</p>
    </div>
{/* 
    <div class="col mb-3">

    </div> */}

    <div class="col-12 col-sm-4 mb-3">
      <h5>CONTACT INFORMATION</h5>
      <div className='short-line mt-3 mb-5'></div>
      <ul class="foot flex-column">
        <li class="nav-item  mb-2"><NavLink to="#" class="nav-link split p-0 text-body-secondary "><MapPin className='icon'/>Bristol England, BS7 9SU United Kingdom</NavLink></li>
        <li class="nav-item mb-2"><a href="tel:+4475692642428" class="nav-link p-0 text-body-secondary split"><Phone className='icon'/> +44 7569 2642 428</a></li>
        <li class="nav-item mb-2"><a href="mailto:contact@carepointhealthcaresolutions.co.uk" class="nav-link p-0 text-body-secondary split text-break"><Mail className='icon'/> contact@carepointhealthcaresolutions.co.uk</a></li>
      </ul>
    </div>

    <div class="col-12 col-sm-4 mb-3">
      <h5>MEDICAL DEPARTMENTS</h5>
      <div className='short-line mt-3 mb-5'></div>
      <ul class="foot flex-column">
        <li class="nav-item mb-2"><NavLink to="/about" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled me-2'/><span>About</span></NavLink></li>
        <li class="nav-item mb-2"><NavLink to="/services" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled me-2'/><span>Services</span></NavLink></li>
        <li class="nav-item mb-2"><NavLink to="/blog" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled me-2'/><span>Blog</span></NavLink></li>
        <li class="nav-item mb-2"><NavLink to="/workWithUs" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled me-2'/><span>Work With Us</span></NavLink></li>
        <li class="nav-item mb-2"><NavLink to="/training" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled me-2'/><span>Training</span></NavLink></li>
        <li class="nav-item mb-2"><NavLink to="/contact" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled me-2'/><span>Contact</span></NavLink></li>
        {/* <li class="nav-item mb-2"><NavLink to="#" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled'/><span>Work with us</span></NavLink></li> */}
      </ul>

      <NavLink to="/contact">
        <div className='contact'>
        CONTACT US
        </div>
      </NavLink>
    </div>
  </footer>
     </section>
    </div>
  )
}

export default Footer
