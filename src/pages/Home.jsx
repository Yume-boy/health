import React from 'react'
import { Carousel } from 'react-bootstrap';
import { MapPin, Phone, Mail, CircleArrowRight, } from 'lucide-react';
import healthCare from './Healthcare.jpeg'
import mentalSupport from './mental support.jpeg'
import nurse from './nurse.jpeg'
import Support from './support.jpeg'

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


     <section className='no2'>

        <div class="text-center m-4 px-3 py-5 rounded"style={{backgroundColor: '#e7e7e7', color: '#3F4A49'}}  >
          <div class="row align-items-start">
            <div class="col">
              <h2 className='fs-1 fw-semibold' >Our approach</h2>
            </div>
            <div class="col text-start fs-4 ">
              <p className='fw-normal '>At CVBhealthcare, we are committed to delivering outstanding healthcare through compassion, clinical excellence, and innovation. Our patient-centered approach ensures high-quality care that is personalized to meet each individual's unique needs.</p>
              <button type="button" class="btn p-3 my-5" style={{backgroundColor: '#40BACA', color:'#fff'}} >Get Started</button>
            </div>
          </div>
        </div>
     </section>

     <section className='form-field py-5'>
        {/* <div className='container py-5 baby'>
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
        </div> */}
        <h2 className='fs-1 py-3 text-white'>Healthcare Professionals</h2>
        <div class="container text-center pt-4">
          <div class="row align-items-start my-4">
            <div class="col-12 col-md-6 col-lg-3 bg-white py-4 rounded mx-1" >
              <img src={nurse} className='rounded-circle ' style={{height: '200px', width: '200px'}} alt="" />
              <h4 className='my-3'>Nurses</h4>
              <p>Advance your career with CarePoint! Connect with us today to join our outstanding team of Agency Nurses or explore permanent and part-time opportunities that align with your goals. Your ideal role is just one step away!</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 bg-white py-4 rounded mx-1">
            <img src={healthCare} className='rounded-circle' style={{height: '200px', width: '200px'}} alt="" />
            <h4 className='my-3'>Healthcare Assistants</h4>
            <p>Join our exceptional and in-demand team of healthcare assistants, committed to making a real difference in the lives of vulnerable individuals every day. Be a part of this rewarding journey rooted in compassion, dedication, and care.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 bg-white py-4 rounded mx-2">
            <img src={Support} className='rounded-circle' style={{height: '200px', width: '200px'}} alt="" />
            <h4 className='my-3'>Support Workers</h4>
            <p>Become a valued member of our support team at CarePoint Healthcare Solutions as a Live-in or Supported Living Support Worker. Deliver compassionate, day-to-day care that empowers individuals to live with independence and dignity.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 bg-white py-4 rounded mx-2">
            <img src={mentalSupport} className='rounded-circle' style={{height: '200px', width: '200px'}} alt="" />
            <h4 className='my-3'>Emotional Support</h4>
            <p>Become part of a dedicated team providing emotional support both in person and online. Work alongside psychologists, therapists, and wellness professionals to help individuals find balance. Make a meaningful impact every day.</p>
            </div>
          </div>
          <button type="button" class="btn p-3 my-5" style={{backgroundColor: '#40BACA', color:'#fff', width: '200px'}} >Learn More</button>
        </div>
     </section>


     
     <section className='no2 py-5 container text-center '>
     <div class="row align-items-start">
            <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
              <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-5.png" alt="" />
              <h3>WORK WITH CVBHealthcare</h3>
              <div className='line mt-3'></div>
               <h4 className='mt-4'>We will give you the flexibility to manage your own market along with the training and support to develop your career and to maximise your career and earning potential.</h4>
            </div>
            <div class="col text-start fs-4 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.3951808283484!2d-2.446470923620528!3d51.4016926718065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718137a6b1d5a7%3A0x37b344131d5f3d9a!2s474B%20Bath%20Rd%2C%20Saltford%2C%20Bristol%20BS31%203DJ%2C%20UK!5e0!3m2!1sen!2suk!4v1714470115747!5m2!1sen!2suk"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
               
            </iframe>

            </div>
          </div>
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

    </div>
  )
}

export default Home
