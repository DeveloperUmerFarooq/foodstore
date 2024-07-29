import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

export default function Orders() {
  const creds = JSON.parse(localStorage.getItem("userdetals"))
  const email = creds.email
  const [orderData, setData] = useState([])
  const [date,setDate]=useState([])
  const [total,setTotal]=useState([])
  useEffect( () => {
    axios.post("http://localhost:5000/order", { email }).then(res => {
      if(res.data){
        setData(res.data[0].reverse())
        setDate(res.data[1].reverse())
        setTotal(res.data[2].reverse())
      }
    })
  }, [email])
  return (
    <div className='container-fluid row m-3 text-center'>
      {date.length>0?date.map((date,i)=>(
      <div className="col-auto mb-3" key={i}>
        <div className="card bg-black" data-bs-theme="dark">
          <div className="card-body">
            <h5 className="card-title">{moment(date).format('dddd, MMMM D, YYYY')}</h5>
            <hr></hr>
            <h1>Order Details :</h1>
            <br/>
            <div className='row'>
            {orderData[i].map((item,i)=>(
              <div className="col-auto mb-3" >
                <div className='card bg-transparent rounded-3' style={{"width":"13rem"}}>
                  <h7 className='card-title text-center m-3 text-wrap'>{item.name}</h7>

                  <div className=' list-group list-group-flush text-center d-flex flex-column justify-content-center align-items-center mt-2 pt-2' >
                      <p className=' list-group-item bg-transparent'>Size: {item.size}</p>
                      <p className=' list-group-item bg-transparent'>Quantity: {item.quantity}</p>
                      <p className=' list-group-item bg-transparent'>Price: {item.price}</p>
                  </div>
                </div>
              </div>
            ))      
          }
          </div>
          </div>
          <hr/>
          <h2 className='mb-3'>Total:{total[i]}</h2>
        </div>
      </div>
   
      )
      ):<div className='Container bg-transaprent text-light text-wrap mt-5 mb-5 text-center w-100 p-5 fs-1' id="order-none"> No Orders Yet</div>}
      </div>
  )
}
