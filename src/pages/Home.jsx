import React from 'react'
import { Carousel } from 'react-bootstrap';
import { MapPin, Phone, Mail, CircleArrowRight, } from 'lucide-react';

const Home = () => {

const img =[
  'https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/client-logos-1.png',
  'https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/client-logos-2.png',
  'https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/client-logos-3.png',
  'https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/client-logos-4.png',
]
  const parallax = document.querySelector('.form-field');

  // Listen to the scroll event
  window.addEventListener('scroll', function () {
      // Adjust the background position of the parallax div
      let scrollPosition = window.scrollY;
      parallax.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;  /* Adjust 0.5 for speed */
  }); 

  return (
    <div className=''>
     <div className='hero '>
      <div className='container'>
        <h2 className='mt-5'>Find Your <span>Perfect Job</span></h2>
        <p>Healtcare Staffing Specialists.
          <br />
           CVBhealthcare leading provider of temporary and permanent healthcare
           <br />
          solutions offering 24/7 coverage
        </p>
        <div className='learn'> Learn More</div>
      </div>
     </div>


     <section className='no2 container'>
      
        <h3 className='mt-5 text-center'>Quality, efficiency & person centred care</h3>
        <div className='line mt-3'></div>
        <h4 className='mt-4'>We provide Care at Home services as well as supply temporary and permanent nursing, care and support staff to a wide range of clients including hospitals and care homes.</h4>
        <div className='info container me-5 row'>
          <div className='mb-3 col-12 col-md-6 col-lg-3'>
            <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-1.png" alt="" />
            <h5>OPERATING</h5>
            <h3>24HR</h3>
            <h5>7 DAYS A WEEK</h5>
          </div>
          <div className='mb-3 col-12 col-md-6 col-lg-3'>
            <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-6.png" alt="" />
            <h5>LAST MINUTE</h5>
            <h3>COVER</h3>
            <h5>SPECIALIST</h5>
          </div>
          <div className='mb-3 col-12 col-md-6 col-lg-3'>
            <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-3.png" alt="" />
            <h5>COMPREHENSIVE</h5>
            <h3>SKILLS</h3>
            <h5>TRAINING GIVEN</h5>
          </div>
          <div className='mb-3 col-12 col-md-6 col-lg-3'>
            <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-5.png" alt="" />
            <h5>DEPENDABLE</h5>
            <h3>PROFESSIONAL</h3>
            <h5>RELIABLE</h5>
          </div>
        </div>
     </section>

     <section className='form-field '>
        <div className='container py-5 baby'>
        <h3 className='text-center'>Find your Perfect Job</h3>
        <div className='line mt-3'></div>
        <h4 className='mt-4'>CVBHealthcare for flexible and permanent healthcare jobs</h4>
        <form action="" className='my-5'>
          <span>
            <div>
              <input type="text" placeholder='NAME'/>
            </div>
            <div>
              <input type="text" placeholder='NAME'/>
            </div>
            <div>
              <input type="text" placeholder='NAME'/>
            </div>
            <div>

            </div>
          </span>
          <div className='mt-5'>
            <input type="text" placeholder='MESSAGE' style={{height: '150px'}}/>
          </div>
          <button className='mt-5' type='submit'>CONTACT US</button>
          <a href=""><button className='mt-5' >APPLY NOW</button></a>
        </form>
        </div>
     </section>

     
     <section className='no2'>
       <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-5.png" alt="" />
        <h3>WORK WITH CVBHealthcare</h3>
        <div className='line mt-3'></div>
        <h4 className='mt-4'>We will give you the flexibility to manage your own market along with the training and support to develop your career and to maximise your career and earning potential.</h4>
     </section>

     <section className='no3'>
      <div>
        <h4>NURSES</h4>
        <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/wave-divider.png" alt="" />
        <h6>Contact us to join our team of Agency Nurses or to find your ideal permanent role.</h6>
        <button>LEARN MORE</button>
      </div>
      <div>
        <h4>Healthcare Assistants</h4>
        <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/wave-divider.png" alt="" />
        <h6>Join our highly talented and sought-after team of Healthcare Assistants improving the lives of vulnerable people on a daily basis.</h6>
        <button>LEARN MORE</button>
      </div>
      <div>
        <h4>Are you looking for staff?</h4>
        <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/wave-divider.png" alt="" />
        <h6>Flexible, quality care staff to meet your needs. CVB staff are widely recognised as one of the best in the industry.</h6>
        <button>LEARN MORE</button>
      </div>
     </section>

     <section className='no2'>
       <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-6.png" alt="" />
        <h3>Our Clients</h3>
        <div className='line mt-3'></div>
        <h4 className='mt-4'>As a leading healthcare recruitment specialist we can provide both temporary and permanent solutions</h4>
     </section>

     <section className='no4'>
      
     <div className="carousel-container">
      <div className="carousel-track">
        {[...img, ...img].map((img, index) => ( // Duplicate images for seamless loop
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </div>
    </div>
     </section>

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

export default Home
