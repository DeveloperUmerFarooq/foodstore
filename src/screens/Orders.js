import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Orders() {
  const creds=JSON.parse(localStorage.getItem("userdetals"))
  const email=creds.email
  const [orderData,setData]=useState([])
  useEffect(()=>{
    axios.post("http://localhost:5000/order",{email}).then(res=>{
      setData(res.data)
    })
  },[email])
  console.log(orderData.reverse())
  return (
    <div>Orders</div>
  )
}
