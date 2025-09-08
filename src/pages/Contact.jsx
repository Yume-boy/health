import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // On component mount, get the time
  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleString(); // E.g., "5/4/2025, 3:15:30 PM"
    setCurrentTime(formattedTime);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setSuccess(false);
    setError(false);

    emailjs.sendForm('service_sj15e9g', 'template_tjpq90v', form.current, 'nVUGVqzeDvOuRKIuG')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setError(true);
      });
  };

  return (
    <div className='contact2'>
      <div className="container text-center my-5 ">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className='fs-1'>Contact Us</h2>
            <p className='fs-4'>hr@carepointhealthcaresolutions.co.uk</p>
            <p className='fs-4'>+447592642428</p>
            <p className='fs-4'>Bristol England, BS7 9SU United Kingdom</p>
          </div>

          <div className="col-12 col-lg-6 ">
            <form ref={form} onSubmit={sendEmail} className='text-start d-flex flex-column border p-3 rounded'>

              <label>Name (Required)</label>
              <div className='row align-items-center my-3'>
                <div className='col d-flex flex-column'>
                  <label>First Name</label>
                  <input type="text" className='px-2' name="first_name" required />
                </div>
                <div className='col d-flex flex-column'>
                  <label>Last Name</label>
                  <input type="text" className='px-2'  name="last_name" required />
                </div>
              </div>

              <div className='d-flex flex-column my-3'>
                <label>Email (Required)</label>
                <input type="email" className='px-2'  name="email" required />
              </div>
              
              <div className='d-flex flex-column my-3'>
                <label>Phone Number (Required)</label>
                <input type="text" className='px-2'  name="phone_no  " required />
              </div>

              <div className='d-flex flex-column my-3'>
                <label>Message (Required)</label>
                <textarea name="message" rows="4" className='p-2'  required></textarea>
              </div>

              {/* Hidden field for time */}
              <input type="hidden" name="time" value={currentTime} />

              <button 
                type="submit" 
                className="btn text-white my-2 align-self-center" 
                style={{ backgroundColor: '#40BACA', height: '50px', width: '150px' }}
              >
                Submit
              </button>

              {success && (
                <p className="text-center mt-3" style={{ color: '#40BACA', fontWeight: 'bold' }}>
                  ✅ Thank you! Your message has been sent.
                </p>
              )}

              {error && (
                <p className="text-center mt-3" style={{ color: 'red', fontWeight: 'bold' }}>
                  ❌ Oops! Something went wrong. Please try again.
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
