import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
  const [eye,setEye]=useState(false)
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const navigate=useNavigate()
  console.log(email,pass)
  const handleOnSubmit=(e)=>{
        e.preventDefault()
        if(email===""|| pass===""){
          alert("Fill the credentials")
        }else{
          if(pass.length<5){
            alert("Password should have at least 5 characters")
          }else{
            axios.get("http://localhost:5000/login",{
              params: { email, pass }
            }).then(res=>{
              if(res.data){
                navigate("/")
              }else{
                alert("user not found")
              }
            })
          }
        }
  }
  return (
    <div className='container mt-5 mb-5'> 
        <div className='text-light w-75 mx-auto p-3'>     
          <h1 className='text-center fs-1 h1 d-block'>Welcome Back!</h1><br/><br/><br/> 
          <div>
          <form method='GET' onSubmit={handleOnSubmit} className='mt-5 d-flex flex-column'> 
            <label htmlFor="email" className=" form-label">Enter your Email:</label>
            <input type='email' className=' form-control' placeholder='Enter Your E-mail' name='email' id='email'
              value={email} onChange={(e)=>setEmail(e.target.value)}
            /><br/>
            <label htmlFor='password' className='form-label'>Enter your password:</label>
            <div className='d-flex form-control'>
                <input type={eye===false?"password":"text"} name='password' id='password' placeholder='Enter your password'
                 className='w-100 border-0 focus-ring-primary' style={{"outline":"none"}}
                 value={pass} onChange={(e)=>setPass(e.target.value)}
                 />
                <div onClick={()=>setEye(!eye)} style={{'cursor':'pointer'}} className=' align-self-center ms-auto'>
                  {eye&&<i className="fa-solid fa-eye"></i>}
                  {!eye&&<i className="fa-solid fa-eye-slash"></i>}
                </div>
            </div><br/>
            <p>Don,t have an account <Link to="/signup">Sign Up</Link> .</p>
            <input type='submit' className='btn btn-success mx-auto' value={"Log in"}/>
          </form>
          </div>
        </div>
    </div>
  )
}
