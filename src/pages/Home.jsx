import React from 'react'
import { Carousel } from 'react-bootstrap';
import { MapPin, Phone, Mail, CircleArrowRight, } from 'lucide-react';
import healthCare from './Healthcare.jpeg'
import mentalSupport from './mental support.jpeg'
import nurse from './nurse.jpeg'
import Support from './support.jpeg'
import { NavLink } from 'react-router-dom';

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
        <h2 className='mt-5'>Heartfelt care, <span> Trusted solutions</span></h2>
        <p>
         CarePointHealthcareSolutions leading provider of temporary and permanent healthcare
           <br />
          solutions offering 24/7 coverage
        </p>
        <NavLink to="/services" className={'navLink'}><div className='learn'> Learn More</div></NavLink>
      </div>
     </div>


     <section className='no2'>

        <div class="text-center m-4 px-3 py-5 rounded"style={{backgroundColor: '#e7e7e7', color: '#3F4A49'}}  >
          <div class="row align-items-start py-5">
            <div class="col-12 col-md-6 mb-3 ">
              <h2 className='fs-1 fw-semibold' >Our approach</h2>
            </div>
            <div class="col-12 col-md-6 text-start fs-4 ">
              <p className='fw-normal '>At CarePointHealthcareSolutions, we are committed to delivering outstanding healthcare through compassion, clinical excellence, and innovation. Our patient-centered approach ensures high-quality care that is personalized to meet each individual's unique needs.</p>
              <NavLink to="/contact"><button type="button"  class="btn p-3 mt-5" style={{backgroundColor: '#40BACA', color:'#fff'}} >Get Started</button></NavLink>
            </div>
          </div>
        </div>
     </section>

     <section className='form-field py-5'>
        <h2 className='fs-1 py-3 text-white'>Healthcare Professionals</h2>
        <div class="container text-center pt-4">
          <div class="row justify-content-between align-items-start my-4">
            <div class="col-12 col-md-6 col-lg-3  mb-2 d-flex justify-content-center"  >
              <div style={{width: '95%'}} className='bg-white py-4  rounded'>
                <img src={nurse} className='rounded-circle ' style={{height: '200px', width: '200px'}} alt="" />
                <h4 className='my-3'>Nurses</h4>
                <p>Advance your career with CarePoint! Connect with us today to join our outstanding team of Agency Nurses or explore permanent and part-time opportunities that align with your goals. Your ideal role is just one step away!</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center  mb-2">
              <div  style={{width: '95%'}} className='bg-white py-4  rounded'>
                <img src={healthCare} className='rounded-circle' style={{height: '200px', width: '200px'}} alt="" />
                <h4 className='my-3'>Healthcare Assistants</h4>
                <p>Join our exceptional and in-demand team of healthcare assistants, committed to making a real difference in the lives of vulnerable individuals every day. Be a part of this rewarding journey rooted in compassion, dedication, and care.</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center   mb-2">
              <div style={{width: '95%'}} className='bg-white py-4  rounded'>
                <img src={Support} className='rounded-circle' style={{height: '200px', width: '200px'}} alt="" />
                <h4 className='my-3'>Support Workers</h4>
                <p>Become a valued member of our support team at CarePoint Healthcare Solutions as a Live-in or Supported Living Support Worker. Deliver compassionate, day-to-day care that empowers individuals to live with independence and dignity.</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-2 ">
              <div style={{width: '95%'}} className='bg-white py-4  rounded'>
                <img src={mentalSupport} className='rounded-circle' style={{height: '200px', width: '200px'}} alt="" />
                <h4 className='my-3'>Emotional Support</h4>
                <p>Become part of a dedicated team providing emotional support both in person and online. Work alongside psychologists, therapists, and wellness professionals to help individuals find balance. Make a meaningful impact every day.</p>
              </div>
            </div>
          </div>
          <NavLink to={'/services'}>
          <button type="button" class="btn p-3 my-5" style={{backgroundColor: '#40BACA', color:'#fff', width: '200px'}} >Learn More</button>
          </NavLink>
        </div>
     </section>


     
     <section className='no2 py-5 container text-center '>
     <div class="row align-items-start">
            <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
              <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-5.png" alt="" />
              <h3>Work With CarePoint</h3>
              <div className='line mt-3'></div>
               <h4 className='mt-4'>We will give you the flexibility to manage your own market along with the training and support to develop your career and to maximise your career and earning potential.</h4>
            </div>
            <div class="col text-start fs-4 ">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.890312325336!2d-2.358572123519633!3d51.38479297178745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718109d3df65f5%3A0x65e5c3e84635cf9e!2s19%20Paragon%20Rd%2C%20Bath%20BA1%205LX%2C%20UK!5e0!3m2!1sen!2suk!4v1735376400000!5m2!1sen!2suk"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
               
            </iframe>

            </div>
          </div>
     </section>

     <div className=''>
      <h2 className='text-center my-4'>Our Services</h2>
     <section className='no3 w-100 row align-items-center'>
      <div className='col-12 col-md-6 col-lg-3'>
        <h4>Home Care</h4>
        <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/wave-divider.png" alt="" />
        <h6>We provide professional and personalized home care services to help your loved ones live comfortably and safely in their own homes.</h6>
        <NavLink to={'/workWithUs'}>
          <button>LEARN MORE</button>
        </NavLink>
      </div>
      <div className='col-12 col-md-6 col-lg-3'>
        <h4>Elderly & Disability Care</h4>
        <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/wave-divider.png" alt="" />
        <h6>We offer compassionate, reliable care services that empower seniors and individuals with disabilities to live independently and with dignity. </h6>
        <NavLink to={'/workWithUs'}>
          <button>LEARN MORE</button>
        </NavLink>
      </div>
      <div className='col-12 col-md-6 col-lg-3'>
        <h4>Mental Health Support</h4>
        <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/wave-divider.png" alt="" />
        <h6 className='mt-4'>We provide caring, confidential mental health support to help individuals navigate life's challenges. </h6>
        <NavLink to={'/workWithUs'}>
          <button>LEARN MORE</button>
        </NavLink>
      </div>
      <div className='col-12 col-md-6 col-lg-3'>
        <h4>Care home and Support Staffing</h4>
        <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/wave-divider.png" alt="" />
        <h6>We provide qualified, compassionate staff to care homes and support services, ensuring quality care.</h6>
        <NavLink to={'/workWithUs'}>
          <button>LEARN MORE</button>
        </NavLink>
      </div>
      
     </section>
     </div>

     <section className='no2 container'>
       <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-6.png" alt="" />
        <h3>Our Clients</h3>
        <div className='line mt-3'></div>
        <h4 className='mt-4'>"CarePoint has been a lifesaver for my family. Their caregivers are kind, professional, and truly care about their ” – Sarah T.
        <br />
        <br />
          "The medical staff is top-notch, and they always go above and beyond to provide the best care possible." – David R.</h4>
     </section>

     {/* <section className='no4'>
      
     <div className="carousel-container">
      <div className="carousel-track">
        {[...img, ...img].map((img, index) => ( // Duplicate images for seamless loop
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </div>
    </div>
     </section> */}

        <div className='d-flex align-items-center flex-column py-5' style={{backgroundColor: '#495A58'}}>
          <h2 className='fs-1 fw-semibold mt-5 text-white'>Get started with us, today. </h2>
          <NavLink to={'/contact'}>
          <button type="button" class="btn text-white my-5" style={{backgroundColor: '#40BACA', height: '80px', width: '150px'}}>Get Started</button>
          </NavLink>
        </div>
    </div>
  )
}

export default Home
