import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ sign = true, admin = false, count = 0 }) {
  const [modal, setModal] = useState(false);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black z-3 w-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src='images/Foodies.png' alt='...' height={80} width={150} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-5" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link fs-4 text-light mx-2" aria-current="page" to="/">Home</Link>
              <Link className="nav-link fs-4 text-light mx-2" to="/order">Your Orders</Link>
            </div>
            {!sign && <div className='d-flex gap-2'>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3' to="/login">Log in</Link>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3' to="/signup">SignUp</Link>
            </div>}
            {sign && <div className='d-flex gap-3'>
              {!admin && <Link className='nav-link bg-dark-subtle p-2 px-3 rounded-3 position-relative' to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                {(count > 0) && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {count}
                </span>}
              </Link>}
              {admin && <Link className='nav-link bg-dark-subtle p-2 rounded-3 align-self-center'>Add Items </Link>}
              <Link className='nav-link bg-dark-subtle p-2 rounded-3 align-self-center' to="/login">Log Out</Link>
              <div className=' rounded-circle bg-dark-subtle fs-5 p-2 nav-link' style={{'cursor':"pointer"}} onClick={() => setModal(!modal)}><i className="fa-solid fa-user"></i></div>
            </div>}
          </div>
        </div>
      </nav>
      {modal&& <div className='p-3 bg-black text-light rounded shadow-lg border-light-subtle rounded-4' id='modal'>
          <p>Username: Umer</p>
          <p>Email: umerfarooq1122@gmail.com</p>
          <button className='btn btn-danger mx-1' onClick={()=>setModal(false)}>Close</button>
          <Link to="/login">
          <button className='btn btn-outline-danger mx-1' onClick={()=>{setModal(false)}}>Logout</button>
          </Link>
        </div>}
    </>
  )
}
