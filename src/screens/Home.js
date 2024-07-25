import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import Items from '../components/Items'

export default function Home() {
  
  const [val,setVal]=useState("")
  return (
    <>
      <Carousel/>
      <form className=' justify-content-center w-100 d-flex align-items-center gap-2'>
        <input className='form-control w-50 rounded-3' type='text' placeholder='Search here' value={val} onChange={(e)=>setVal(e.target.value)}/>
        <input type='submit' className='btn btn-success p-1 rounded-2' value={"Search"}/>
        {val&&<button className='btn btn-close bg-danger p-2 z-3' onClick={()=>setVal("")}></button>}<br/>
      </form>
      <Items/>
    </>
  )
}
