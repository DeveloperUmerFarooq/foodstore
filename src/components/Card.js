import React, { useEffect, useState } from 'react'
import { useCart,useDispatch } from './ContextReducer';
export default function Card({items}) {
  const [keys,setKeys]=useState([])
  const [size, setSize] = useState(()=>{
    let size = Object.keys(items.options[0])
    return size[1]
  });
  const [quantity,setQuantity]=useState(1)
  const [total,setTotal]=useState(items.options[0][size])
  const data=useCart()
  let dispatch=useDispatch()
  
  useEffect(()=>{
    let newkeys=Object.keys(items.options[0])
    setKeys( newkeys.filter((key,index)=>{return index!==0}))
    setTotal(quantity*parseFloat(items.options[0][size]))
  },[items.options,quantity,size])

  const handleClick=async ()=>{
      await dispatch({type:"Add",id:items._id,name:items.name,quantity:quantity,size:size,price:total})
      console.log(data)
  }

  return (
    <>
    
          <div className="card col-3 p-0 m-2 bg-transparent text-light border-1 border-dark justify-content-evenly" style={{ 'width': '20rem' }}>
            <img src={items.img} loading='lazy' className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title flex-grow-1">{items.name}</h3><br/>
              <p className='fs-6 text-start'>{items.description}</p><br/>
              <div className='row'>
              <select name='type' id='type' className=' form-select bg-success-subtle w-50 mx-auto fs-6 col-2' 
              onChange={(e)=>{
                setSize(e.target.value)
              }}> 
              {keys.map((elem,i)=><option key={i} className='fs-6' value={elem} onClick={(e)=>setSize(e.target.value)} >{elem}</option>)}
              </select>
              <select name="quantity" id="quantity" className="form-select w-25 bg-primary-subtle col-2 me-auto" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              </div><br/>
              <strong>Total Price:<br/><center><h1 className='fs-3'>{total} Rs</h1></center></strong>
              <hr/>
              <center>
                <button className="btn btn-outline-success w-50 m-3" onClick={handleClick}>Add to cart</button>
              </center>
            </div>
          </div>
    </>
  )
}
