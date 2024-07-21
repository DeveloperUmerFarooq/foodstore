import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  const [eye,setEye]=useState(false)
  return (
    <div className='container mt-5 mb-5'> 
        <div className='text-light w-50 mx-auto p-3'>     
          <h1 className='text-center fs-1 h1 d-block'>Welcome Back!</h1><br/><br/><br/> 
          <div>
          <form method='POST' className='mt-5 d-flex flex-column'> 
            <lable htmlFor="email" className=" form-label fs-4">Enter your Email:</lable>
            <input type='text' className=' form-control' placeholder='Enter Your E-mail' name='name' id='name'/><br/>
            <lable htmlFor="name" className=" form-label fs-4">Enter your UserName:</lable>
            <input type='text' className=' form-control' placeholder='Enter Your UserName' name='name' id='name'/><br/>
            <label htmlFor='password' className='form-label fs-4'>Enter your password</label>
            <div className='d-flex form-control'>
                <input type={eye===false?"password":"text"} name='password' id='password' placeholder='Enter your password' className='w-100 border-0 focus-ring-primary' style={{"outline":"none"}}/>
                <div onClick={()=>setEye(!eye)} style={{'cursor':'pointer'}} className=' align-self-center ms-auto'>
                  {eye&&<i className="fa-solid fa-eye"></i>}
                  {!eye&&<i className="fa-solid fa-eye-slash"></i>}
                </div>
            </div><br/>
            <lable htmlFor="cpass" className=" form-label fs-4">Confirm Your Password:</lable>
            <input type='text' className=' form-control' placeholder='Confirm Password' name='cpass' id='cpass'/><br/>
            <p>Don,t have an account <Link to="/login">Sign In</Link> .</p>
            <input type='submit' className='btn btn-success w-25 mx-auto' value={"Sign in"}/>
          </form>
          </div>
        </div>
    </div>
  )
}
