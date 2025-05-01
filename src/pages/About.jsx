import React from 'react'
import values from './values.jpeg'
import woman from './womanOnAComputer.jpeg'

const About = () => {
  return (
    <div>
       <div className='hero-2 text-white text-center'>
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
              <h3 className='my-4 fs-2 fw-semibold'>A modern approach</h3>
              <p className='fs-5'>We believe every client deserves personalized recommendations for the team member best suited to their needs. That’s why, instead of following the usual approach, we’ve built a system tailored around what matters most — our patients' individual care requirements.</p>
            </div>
            <div class="col text-start fs-5 ">
              <img src={woman} alt="" width={'100%'} className='rounded'/>
            </div>
          </div>
        </div>
        
        <div className='container my-5 py-5'>
          <h2 className='text-center fs-2 fw-semibold mb-4'>Our Rates</h2>
          <div class="row  align-items-start my-3">
            <div class="col order-last">
              <p className='fs-5'>Online or In-Person Sessions
                A dedicated space for individuals to explore and process their thoughts, whether virtually or face-to-face. Sessions are typically held weekly or bi-weekly.
                <br />
                <br />
                60 minutes | $300 | Get Started</p>
            </div>
            <div class="col-12 col-md-6 text-start fs-5 ">
              <h3 className='text-start fw-semibold fs-2 '>Talk therapy</h3>
            </div>
          </div>
          <div class="row  align-items-start my-3">
            <div class="col order-last">
              <p className='fs-5'>This time is dedicated to assessing your physical and mental health in order to provide appropriate medication to help manage mental health symptoms. Please note: this session does not include talk therapy.
                <br />
                <br />
                45 minutes | $250 | Get Started</p>
            </div>
            <div class="col-12 col-md-6 text-start fs-5 ">
              <h3 className='text-start fw-semibold fs-2'>Psychiatric session</h3>
            </div>
          </div>
          <div class="row  align-items-start my-3">
            <div class="col order-last">
              <p className='fs-5'>Online or In-Person Sessions
                This session is designed to focus on what matters most to you, helping you create a personalized plan to achieve both your personal and professional goals.
                <br />
                <br />
                50 minutes | $200 | Get Started</p>
            </div>
            <div class="col-12 col-md-6 text-start fs-5 ">
              <h3 className=' fw-semibold fs-2'>Coaching session</h3>
            </div>
          </div>
          <div class="row  align-items-start my-3">
            <div class="col order-last">
              <p className='fs-5'>In-Person Only This session is designed to alleviate pain and treat a variety of physical, mental, and emotional conditions.
                <br />
                <br />
                60 minutes | $250 | Get Started</p>
            </div>
            <div class="col-12 col-md-6 text-start fs-5 ">
              <h3 className=' fw-semibold fs-2'>Acupuncture session</h3>
            </div>
          </div>
        </div>

        <div className='d-flex align-items-center flex-column py-5' style={{backgroundColor: '#DCD9D0'}}>
          <h2 className='fs- fw-semibold'>Get started with us, today. </h2>
          <button type="button" class="btn text-white my-3" style={{backgroundColor: '#40BACA', height: '80px', width: '150px'}}>Get Started</button>
        </div>
    </div>
  )
}

export default About
