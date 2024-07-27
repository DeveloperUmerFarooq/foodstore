import React from 'react'
import { useCart, useDispatch } from '../components/ContextReducer'
import axios from 'axios'


export default function Cart() {
    const data = useCart()
    const creds=JSON.parse(localStorage.getItem("userdetals"))
    const email=creds.email
    const dispatch=useDispatch()
     const handleClick=async (id)=>{
        await dispatch({type:"remove",index:id})
    }
    const checkout=async ()=>{
        await axios.post("http://localhost:5000/checkout",{email,data,total}).then(res=>{
            console.log(res.data)
            if(res.data){
                dispatch({type:"remAll"})
            }
            else{
                alert("request failed")
            }
        })            
    }
            
    let total = 0;
data.forEach(item => {
  total += item.price;
});
    return (
        <>
            
            {(data.length>0) ?<div className='container-fluid p-5'> <table className='table table-dark z-3 text-center'>
                        <thead>

                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Quantity</th>
                                <th scope='col'>Size</th>
                                <th scope='col'>Price</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                         <tbody>

                            {
                               data.map((item, i) => (
                                    <>
                                        <tr key={i}>
                                            <th scope='row'>{i + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.size}</td>
                                            <td>{item.price}</td>
                                            <td style={{cursor:"pointer"}}><i class="fa fa-trash" aria-hidden="true" onClick={handleClick}></i></td>
                                        </tr>
                                    </>
                                )) 
                            }

                        </tbody>
                    </table><br/>
                    <h1 className='text-light'>Total: {total}</h1><hr/>
                    <button className="btn btn-danger mx-2" onClick={async ()=>{await dispatch({type:"remAll"})}}>Remove All</button>
                    <button className="btn btn-outline-success mx-2" onClick={checkout}>Check Out</button>
                    
                    </div>: <div className='container-fluid fs-1 mx-auto m-2 text-center text-light bg-dark border-1 border-light w-100 p-2 m-3'>No records found !</div>}
        </>
    )
}
