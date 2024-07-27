import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

export default function Items({search=""}) {
  const [items, setItems] = useState([])
  const [catagory, setCatagory] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/items").then(result => {
      if (result) {
        setCatagory(result.data[0])
        setItems(result.data[1])
      }
      else {
        alert("Error Fetching dataa")
      }
    })
  }, [catagory,items])
  return (
    <>
      <div className='container-fluid mb-5 mx-4' id='items'>

        {(search==="")?catagory.map((elem)=>(
                <div key={elem._id}>
                <h1 className=' fs-1 text-decoration-underline text-light' >{elem.CategoryName}</h1><br /><hr />
                <div className={`${elem.CategoryName} mb-5 row`} key={elem.id}>
                {
                  items.filter((item)=>{return item.CategoryName===elem.CategoryName}).map((item,i)=><Card key={i} items={item}/>
                  )
                }
                </div>
              </div>
        )):<div className="mb-5 row" id="filter">
        {
          items.filter((item)=>{return item.name.toLowerCase().includes(search.toLowerCase())}).map((item,i)=><Card key={i} items={item}/>
          )
        }
        </div>
        }   
      </div>
    </>
  )
}
