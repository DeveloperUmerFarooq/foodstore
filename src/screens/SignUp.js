import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function SignUp() {
  const [eye,setEye]=useState(false)
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [Pass,setPass]=useState("")
  const [confirm,setConfirm]=useState("")
  const navigate= useNavigate()
  const handleOnsubmit = async (e)=>{
    e.preventDefault()
    if(name===""||Pass===""||email===""){
      alert("Fill all the credentialse Properly")
    }
    else{
      if(Pass.length<5){
        alert("Password shold have at least 6 letters/symbols")
      }
      else{
        if(confirm===Pass){
          axios.post("http://localhost:5000/signup",{name,email,Pass}).then(res=>{
            if(!res.data) alert("User already exist with this email")
            else {alert("User Created")
              navigate("/login")
            }

          })
        }
        else{
          alert(`Password does'nt match`);
        }
      }
    }
  }
  return (
    <div className='container mt-5 mb-5 w-100'> 
        <div className='text-light w-75 mx-auto p-3'>     
          <h1 className='text-center fs-1 h1 d-block'>Create an account</h1><br/><br/><br/> 
          <div>
          <form method='POST' className='mt-5 d-flex flex-column' onSubmit={handleOnsubmit}> 
            <label htmlFor="name" className=" form-label">Enter your UserName:</label>
            <input type='text' className=' form-control' placeholder='Enter Your UserName' name='name' id='name' 
            value={name} onChange={(e)=>setName(e.target.value)}
            /><br/>
            <label htmlFor="email" className=" form-label">Enter your Email:</label>
            <input type='email' className=' form-control' placeholder='Enter Your E-mail' name='name' id='name'
             value={email} onChange={(e)=>setEmail(e.target.value)}
             /><br/>
            <label htmlFor='password' className='form-label'>Enter your password</label>
            <div className='d-flex form-control'>
                <input type={eye===false?"password":"text"} name='password' id='password' placeholder='Enter your password' 
                className='w-100 border-0 focus-ring-primary' style={{"outline":"none"}} 
                value={Pass} onChange={(e)=>setPass(e.target.value)}
                />
                <div onClick={()=>setEye(!eye)} style={{'cursor':'pointer'}} className=' align-self-center ms-auto'>
                  {eye&&<i className="fa-solid fa-eye"></i>}
                  {!eye&&<i className="fa-solid fa-eye-slash"></i>}
                </div>
            </div><br/>
            <label htmlFor="cpass" className=" form-label">Confirm Your Password:</label>
            <input type='text' className=' form-control' placeholder='Confirm Password' name='cpass' id='cpass' 
            value={confirm} onChange={(e)=>setConfirm(e.target.value)}
            /><br/>
            <p>Don,t have an account <Link to="/login">Sign In</Link> .</p>
            <input type='submit' className='btn btn-success mx-auto' value={"Create Account"}/>
          </form>
          </div>
        </div>
    </div>
  )
}
