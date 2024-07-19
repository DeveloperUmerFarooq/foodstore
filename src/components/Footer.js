import React from 'react'

export default function Footer() {
  return (
    <>
      <div className=' container-fluid bg-black p-0'>
        <div className='row text-light' id='footer'>
          <div className='col-lg position-relative d-flex flex-column'>
              <center>
              <img src='images/Foodies.png' id='footer-logo' alt=''/>
              <p className='fs-1' id='footer-text1'>Order the food you want!</p>
              </center>
          </div>
          <div className='col-lg'>
              <center>
              <h1>Services we provide</h1>
              </center><br/>
              <ul className='d-flex flex-column justify-content-center text-wrap'>
                <li>Delivering groceries directly to customers' homes.</li>
                <li>Enabling customers to place orders through a website or app.</li>
                <li>Providing ready-to-eat meals, either hot or cold.</li>
                <li>Offering a café or dining area where customers can eat meals prepared on-site.</li>
                <li>Offering help through phone, email, or in-store assistance for any customer inquiries or issues.</li>
              </ul>
          </div>
        </div>
        <div className=' h-25 fs-3 text-light bg-gradient'>
          <center>
            &copy;<span>Copytight! All rights reserves since 2024</span>
          </center>
        </div>
      </div>
    </>
  )
}
