import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../screens/Cart'
import { useCart } from './ContextReducer'

export default function Navbar() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState(false)
  const data = useCart()
  const user = JSON.parse(localStorage.getItem("userdetals"))
  const handleLogout = () => {
    localStorage.removeItem("authTokken")
    localStorage.removeItem("admin")
    localStorage.removeItem("userdetals")
    setModal(false)
    navigate('/login')
    window.location.reload()
  }
  const closeCart = () => {
    setCart(false)
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
              <Link className="nav-link fs-4 text-light mx-2 text-center" aria-current="page" to="/">Home</Link>
              {localStorage.getItem("authTokken") && <Link className="nav-link fs-4 text-light mx-2 text-center" to="/order">Your Orders</Link>}
            </div>
            {!localStorage.getItem("authTokken") && <div className='d-flex gap-2 flex-sm-row flex-column'>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3 text-center' to="/login">Log in</Link>
              <Link className='nav-link bg-dark-subtle p-2 rounded-3 text-center' to="/signup">SignUp</Link>
            </div>}
            {localStorage.getItem("authTokken") && <div className='d-flex flex-column flex-sm-row gap-3'>
              {(localStorage.getItem("admin")) ? <Link className='nav-link bg-dark-subtle p-2 rounded-3 text-center'>Add Items </Link> : ""}
              <Link className='nav-link bg-dark-subtle p-2 rounded-3 text-center' to="/login" onClick={handleLogout}>Log Out</Link>
              <div className='d-flex gap-3 justify-content-center'>
                <div className='nav-link bg-dark-subtle p-2 px-3 rounded-3 position-relative' onClick={() => setCart(!cart)} style={{"cursor":"pointer"}}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  {(data.length > 0) && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {data.length}
                  </span>}
                </div>
                <div className=' rounded-circle bg-dark-subtle p-2 nav-link' style={{ 'cursor': "pointer" }} onClick={() => setModal(!modal)}><i className="fa-solid fa-user"></i></div>
              </div>
            </div>}
          </div>
        </div>
      </nav>
      {createPortal(
        modal && <div className='bg-black d-flex flex-column text-light p-3 rounded-3' id='modal'>
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
          <div className='d-flex gap-2'>
            <button className="col btn btn-danger w-25" onClick={() => { setModal(false) }}>Close</button>
            <button className="col btn btn-outline-danger w-25" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        , document.body)}
      {createPortal(
        cart && <div className='overlay'>
          <div className='position-relative w-100 bg-dark' id='cart'>
            <span class="position-absolute translate-middle badge" id='btn-close' onClick={()=>setCart(false)}>
              <button className='btn btn-danger'>X</button>
            </span><Cart closeCart={closeCart} />
          </div>
        </div>, document.body)
      }
    </>
  )
}
