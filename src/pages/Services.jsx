import React from 'react'
import service from './service.jpg'
import profile from './profile.jpg'
import { Kanban, PillBottle, RockingChair, Target } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const HCA = () => {
  return (
    <div>
      <div className='hero-3 text-white text-center'
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${service})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          }}>
          <div className='container'>
            <h2 className='mt-5'>Services</h2>
          </div>
        </div> 

        <div className='container d-flex align-items-center flex-column top pb-5 mt-4 rounded'>
            <h3 className='my-4 fs-2 fw-semibold'>Our Healthcare Solutions:</h3>
              <ul className='fs-5 lh-lg'>
                <li><span className='fw-semibold'>Home Care Services –</span> Personalized in-home nursing and caregiver support.</li>
                <li><span className='fw-semibold'>Elderly & Disability Care –</span> Assistance for seniors and individuals with special needs.</li>
                <li><span className='fw-semibold'>Medical Consultations –</span> Expert advice from our healthcare professionals.</li>
                <li><span className='fw-semibold'>Rehabilitation & Therapy –</span> Physical and occupational therapy services.</li>
                <li><span className='fw-semibold'>Mental Health Support –</span> Counseling and emotional support services.</li>
              </ul>
        </div>

        <div className='container my- d-flex flex-column bottom  my-4'>
          <h2 className='text-center fs-1 fw-semibold my-5'>Our Services</h2>
          <div class="row align-items-start">
            <div class="col d-flex flex-column text-center">
             <RockingChair size={70} strokeWidth={1} className='align-self-center'/>
              <h3 className='my-4 fs-2 fw-semibold'>Personal Health Assistance</h3>
              <p className='fs-4'>Personalized in-home nursing and caregiver support.</p>
            </div>
            <div class="col text-start fs-5 d-none d-md-block">
            </div>
          </div> 
          <div class="row align-items-start">
            <div class="col d-flex flex-column text-center order-last">
             <PillBottle size={70} strokeWidth={1} className='align-self-center'/>
              <h3 className='my-4 fs-2 fw-semibold'>Mental Health Support</h3>
              <p className='fs-5'>You’re not alone — we’re here to listen and help. </p>
            </div>
            <div class="col text-start fs-5 d-none d-md-block">
            </div>
          </div>
          <div class="row align-items-start">
            <div class="col d-flex flex-column text-center">
             <Target size={70} strokeWidth={1} className='align-self-center'/>
              <h3 className='my-4 fs-2 fw-semibold'>Elderly & Disability Care</h3>
              <p className='fs-5'>Your comfort, dignity, and independence matter to us. </p>
            </div>
            <div class="col text-start fs-5 d-none d-md-block">
            </div>
          </div>
           <div class="row align-items-start">
            <div class="col d-flex flex-column text-center order-last">
             <Kanban size={70} strokeWidth={1} className='align-self-center'/>
              <h3 className='my-4 fs-2 fw-semibold'>Care home and Support Staffing</h3>
              <p className='fs-5'>Connecting care homes with trusted support professionals. </p>
            </div>
            <div class="col text-start fs-5 d-none d-md-block">
            </div>
          </div>
          <NavLink to={'/contact'} className='align-self-center'> 
            <button type="button" class="btn text-white my-3  mt-5 " style={{backgroundColor: '#40BACA', height: '70px', width: '200px'}}>Get Started</button>
          </NavLink>
        </div>


        <div style={{backgroundColor: '#DCD9D0', }}>
          <div className='container d-flex align-items-center flex-column top py-5 mt-5 rounded' style={{backgroundColor: '#DCD9D0', }}>
              <h3 className='my-4 fs-2 fw-semibold'>Services Offered</h3>
                <ul className='fs-5 lh-lg'>
                  <li><span className='fw-semibold'>Personal Health Assistance – </span>Assistance with hygiene, mobility, and physical well-being.</li>
                  <li><span className='fw-semibold'>Medication Management – </span>Assisting with medication reminders and administration.</li>
                  <li><span className='fw-semibold'>Emotional & Mental Health Support – </span>Providing both in-person and online emotional well-being support to reduce isolation and improve mental health. </li>
                  <li><span className='fw-semibold'>Nutrition & Dietary Support – </span>Ensuring balanced diets for individuals in care.</li>
                  <li><span className='fw-semibold'>Healthcare Facility Assistance – </span>Providing non-medical support to individuals in hospitals, clinics, or care facilities.</li>
                  <li><span className='fw-semibold'>Mobility & Transportation Support – </span>Escorting clients to healthcare appointments.</li>
                </ul>
          </div>
        </div>

        <div style={{backgroundColor: '#495A58'}} className='py-5'>
        <div className='container text-center text-white py-5' >
          <h2 className='py-5 fs-1  font-monospace'>Questions before getting started? <NavLink to={'/contact'} className={'text-success'}>Get in touch.</NavLink></h2>
        </div> 
        </div>
      
    </div>
  )
}

export default HCA
