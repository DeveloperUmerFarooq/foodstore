import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({sign=false,pos='static'}) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-transparent position-${pos} z-3 w-100`}>
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
            {!sign &&<div className='d-flex gap-2'>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3' to="/login">Log in</Link>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3' to="/signup">SignUp</Link>
            </div>}
            {sign &&<div className='d-flex gap-3'>
              <Link className='nav-link bg-dark-subtle p-2 px-3 rounded-3 position-relative' to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
              </Link>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3 align-self-center' to="/signup">Log Out</Link>
            </div>}
          </div>
        </div>
      </nav>
    </>
  )
}
