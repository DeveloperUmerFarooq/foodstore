import React, { useEffect, useState } from 'react'

export default function Card({items}) {
  const [keys,setKeys]=useState([])
  const [amount, setAmount] = useState(() => {
    const values = Object.values(items.options[0]);
    return values[1]
  });
  const [quantity,setQuantity]=useState(1)
  useEffect(()=>{
    let newkeys=Object.keys(items.options[0])
    setKeys( newkeys.filter((key,index)=>{return index!==0}))
  },[items.options])
  return (
    <>
    
          <div className="card col-3 p-0 m-2 bg-transparent text-light border-1 border-dark" style={{ 'width': '20rem' }}>
            <img src={items.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">{items.name}</h3>
              <p className='fs-6'>{items.description}</p><br/>
              <div className='row'>
              <select name='type' id='type' className=' form-select bg-success-subtle w-50 mx-auto fs-6 col-2' 
              onChange={(e)=>{
                setAmount(e.target.value)
                console.log(amount)
              }}> 
              {keys.map((elem,i)=><option key={i} className='fs-6' value={items.options[0][elem]} onClick={(e)=>setAmount(e.target.value)} >{elem}</option>)}
              </select>
              <select name="quantity" id="quantity" className="form-select w-25 bg-primary-subtle col-2 me-auto" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              </div><br/>
              <strong>Total Price:<br/><center><h1 className='fs-3'>{quantity * parseFloat(amount)} Rs</h1></center></strong>
              <hr/>
              <center>
                <button className="btn btn-outline-success w-50 m-3">Add to cart</button>
              </center>
            </div>
          </div>
    </>
  )
}
