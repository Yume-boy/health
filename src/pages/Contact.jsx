import React from 'react'

const Contact = () => {
  return (
    <div className='contact2'>
      <div class="container text-center my-5 ">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className='fs-1'>Contact Us</h2>
            <p className='fs-4'>email@example.com</p>
            <p className='fs-4'>(555) 555-5555</p>
            <p className='fs-4'>123 Demo Street New York, NY 12345</p>
          </div>
          <div class="col-12 col-lg-6 ">
            <form action="" className='text-start border p-3 rounded'>
              <label htmlFor="" className=''>Name (Required)</label>
              <div className='row align-items-center my-3'>
                <div className=' col d-flex flex-column'>
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>
                  <div className=' col d-flex flex-column '>
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className='d-flex flex-column my-3'>
                  <label htmlFor="">Email (Required)</label>
                  <input type="text" />
              </div>
              <div className='d-flex flex-column my-3'>
                  <label htmlFor="">Message (Required)</label>
                  <input type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
