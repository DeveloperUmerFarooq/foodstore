import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar(username="umer",userEmail="cooldaddy983@gmail.com") {
  const navigate=useNavigate()
  const handleLogout=()=>{
        localStorage.removeItem("authTokken")
        localStorage.removeItem("admin")
        navigate('/login')
  }

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
              {localStorage.getItem("authTokken") && <Link className="nav-link fs-4 text-light mx-2" to="/order">Your Orders</Link>}
            </div>
            {!localStorage.getItem("authTokken") && <div className='d-flex gap-2'>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3' to="/login">Log in</Link>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3' to="/signup">SignUp</Link>
            </div>}
            {localStorage.getItem("authTokken") && <div className='d-flex gap-3'>
              <Link className='nav-link bg-dark-subtle p-2 px-3 rounded-3 position-relative' to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </Link>
              {(localStorage.getItem("admin"))?<Link className='nav-link bg-dark-subtle p-2 rounded-3 align-self-center'>Add Items </Link>:""}
              <Link className='nav-link bg-dark-subtle p-2 rounded-3 align-self-center' to="/login" onClick={handleLogout}>Log Out</Link>
              <div className=' rounded-circle bg-dark-subtle fs-5 p-2 nav-link' style={{'cursor':"pointer"}}><i className="fa-solid fa-user"></i></div>
            </div>}
          </div>
        </div>
      </nav>
      
    </>
  )
}
