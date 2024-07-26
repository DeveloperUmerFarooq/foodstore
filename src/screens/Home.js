import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import Items from '../components/Items'

export default function Home() {
  
  const [val,setVal]=useState("")
  const [search,setSearch]=useState("")
  const handleClick=()=>{
    setSearch("")
    setVal("")
  }
  const handleOnSubmit=(e)=>{
      e.preventDefault()
      setSearch(val) 
  }
  return (
    <>
      <Carousel/>
      <form className=' justify-content-center w-100 d-flex align-items-center gap-2' onSubmit={handleOnSubmit}>
        <input className='form-control w-50 rounded-3' type='text' placeholder='Search here' value={val} onChange={(e)=>setVal(e.target.value)}/>
        <input type='submit' className='btn btn-success p-1 rounded-2' value={"Search"}/>
        {val&&<button className='btn btn-close bg-danger p-2 z-3' onClick={handleClick}></button>}<br/>
      </form>
      <Items search={search}/>
    </>
  )
}
