import React from 'react'
import { MapPin, Phone, Mail, CircleArrowRight, } from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <section className='footer px-5'>
     <footer class="row  py-5  border-top">
    <div class="col-12 col-sm-4 mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
       <img src="https://i0.wp.com/cvbhealthcare.co.uk/wp-content/uploads/2019/11/CVBHealthcare_logo_black-1.png?w=1170&ssl=1" alt="" style={{width: '80%'}}/>
      </a>
      <p class="text-body-secondary">We are a specialist nursing and care agency covering the whole of North East Somerset, supplying healthcare personnel to establishments such as care home or hospitals and providing domiciliary care for private service users.</p>
    </div>
{/* 
    <div class="col mb-3">

    </div> */}

    <div class="col-12 col-sm-4 mb-3">
      <h5>CONTACT INFORMATION</h5>
      <div className='short-line mt-3 mb-5'></div>
      <ul class="foot flex-column">
        <li class="nav-item  mb-2"><a href="#" class="nav-link split p-0 text-body-secondary"><MapPin className='icon'/> Bristol, Saltford, Bath Road 474 B, Postcode BS31 3DJ, United Kingdom</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary split"><Phone className='icon'/> +44 07447 918 683</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary split"><Mail className='icon'/> Contact@CVBHealthcare.co.uk</a></li>
      </ul>
    </div>

    <div class="col-12 col-sm-4 mb-3">
      <h5>MEDICAL DEPARTMENTS</h5>
      <div className='short-line mt-3 mb-5'></div>
      <ul class="foot flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled'/><span>About</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled'/><span>Clients</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled'/><span>Nurses</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled'/><span>Healthcare Assistance</span></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary split"><CircleArrowRight className='iconFilled'/><span>Work with us</span></a></li>
      </ul>

      <a href="">
        <div className='contact'>
        CONTACT US
        </div>
      </a>
    </div>
  </footer>
     </section>
    </div>
  )
}

export default Footer
