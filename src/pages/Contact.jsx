import React from 'react'

const Contact = () => {
  return (
    <div className='contact2'>
      <div class="container text-center my-5 ">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className='fs-1'>Contact Us</h2>
            <p className='fs-4'>hr@carepointhealthcaresolutions.co.uk</p>
            <p className='fs-4'>+44 7569 2642 428 </p>
            <p className='fs-4'>105 Romney Avenue Lockleaze, Bristol England, BS7 9SU United Kingdom</p>
          </div>
          <div class="col-12 col-lg-6 ">
            <form action="" className='text-start d-flex flex-column border p-3 rounded'>
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
                <button type="button" class="btn text-white my-2 align-self-center" style={{backgroundColor: '#40BACA', height: '50px', width: '150px'}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
