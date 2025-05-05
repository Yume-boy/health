import React from 'react'
import values from './values.jpeg'
import woman from './womanOnAComputer.jpeg'
import about from './aboutUs.jpeg'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
       <div className='hero-2 text-white text-center'
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          }}>
          <div className='container'>
            <h2 className='mt-5'>About Us</h2>
          </div>
        </div> 

        <div className='container my-5'>
          <div class="row align-items-start">
            <div class="col-12 col-lg-6">
              <h3 className='my-4 fs-2 fw-semibold'>Our Values</h3>
              <ul className='fs-5'>
                <li><span className='fw-semibold'>Compassion:</span> We care for every patient with kindness, empathy, and respect.</li>
                <li><span className='fw-semibold'>Excellence:</span> We are committed to delivering the highest quality healthcare services.</li>
                <li><span className='fw-semibold'>Integrity:</span> Honesty, transparency, and professionalism guide all that we do.</li>
                <li><span className='fw-semibold'>Innovation:</span> We leverage cutting-edge healthcare solutions to enhance patient outcomes.</li>
              </ul>
            </div>
            <div class="col text-start fs-5 ">
              <img src={values} alt="" width={'100%'} className='rounded'/>
            </div>
          </div>
        </div>
        
        
        <div className='container my-5 py-5'>
          <div class="row  align-items-start">
            <div class=" order-last col-12 col-lg-6">
              <h3 className='my-4 display-5 fw-normal'>A Modern Approach</h3>
              <p className='fs-5'>We believe every client deserves personalized recommendations for the team member best suited to their needs. That’s why, instead of following the usual approach, we’ve built a system tailored around what matters most — our patients' individual care requirements.</p>
            </div>
            <div class="col text-start fs-5 ">
              <img src={woman} alt="" width={'100%'} className='rounded'/>
            </div>
          </div>
        </div>
        
        <div className='container my-5' style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <div class=" d-flex flex-column align-items-center">
              <h3 className='display-5 segoe fw-normal'>Our Mission</h3>
              <div className='line mt-3'></div>
              <div className='width-75'>
                <h4 className='my-4 segoe text-center'>CarePoint Health Solutions LTD provides tailored healthcare services for vulnerable populations while fostering an inclusive work environment. We offer in-person and online emotional support to those most in need, ensuring accessibility through face-to-face and digital platforms. Our mission includes strengthening caregiver-client relationships through professional training and best practices in healthcare and emotional support.</h4>
              </div>
            </div>
        </div>
         <div className='container my-5'>
            <div class=" d-flex flex-column align-items-center">
              <h3 className='display-5 fw-normal segoe'>Our Vision</h3>
              <div className='line mt-3'></div>
              <div className='width-75'>
                <h4 className='my-4  text-center segoe'>Our goal is to provide exceptional healthcare support services for vulnerable populations (children, adults, elderly) across Bristol and Somerset while empowering young people and individuals from underrepresented backgrounds through inclusive career opportunities and  Emotional Support: Offering emotional guidance to individuals within healthcare settings, helping them build self-esteem and positive relationships through both in-person interactions and virtual support systems.</h4>
              </div>
            </div>
        </div>
         <div className='container my-5'>
            <div class=" d-flex flex-column align-items-center">
              <h3 className='display-5 fw-normal'>   Why Our Approach Stands Out</h3>
              <div className='line mt-3'></div>
              <div className='w-75'>
                <ul className='fs-5 lh-lg'>
                  <li><span className='fw-semibold'>Comprehensive Support Across All Ages: </span>Specialized healthcare and emotional support services for children, adults, and the elderly in person and online.</li>
                  <li><span className='fw-semibold'>Targeting Young People and the Global Majority: </span>Focus on career development for young individuals, especially from underrepresented backgrounds.</li>
                  <li><span className='fw-semibold'>Diverse Workforce:</span> Creating an inclusive environment where employees from all races, genders, and backgrounds can thrive.</li>
                  <li><span className='fw-semibold'>Community Impact: </span>Addressing healthcare needs while also promoting economic and social development in local communities.</li>
                  <li><span className='fw-semibold'>Mental Health Support Promoting Relationships Between Generations:</span> Strengthening relationships between healthcare recipients and their caregivers through caregiving guidance and training.</li>
                  <li>⁠Discover our blog, your go-to resource for both physical and emotional support to uplift your mood and tackle anxiety. Remember, you’re not alone in this journey—let’s support each other together!</li>
                </ul>
              </div>
            </div>
        </div>

        <div className='d-flex align-items-center flex-column py-5' style={{backgroundColor: '#DCD9D0'}}>
          <h2 className='fs- fw-semibold'>Get started with us, today. </h2>
          <NavLink to='/contact'>
          <button type="button" class="btn text-white my-3" style={{backgroundColor: '#40BACA', height: '80px', width: '150px'}}>Get Started</button>
          </NavLink>
        </div>
    </div>
  )
}

export default About
